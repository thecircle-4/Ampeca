var db = require("../DataBase/Connection.js");
const { signupValidation, loginValidation } = require("./validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register =
  (signupValidation,
  (req, res, next) => {
    db.db.query(
      `SELECT * FROM user WHERE LOWER(email) = LOWER(${db.db.escape(
        req.body.email
      )});`,
      (err, result) => {
        if (result.length) {
          return res.status(409).send({
            msg: "This user is already in use!",
          });
        } else {
          // username is available
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err,
              });
            } else {
              // has hashed pw => add to database
              db.db.query(
                `INSERT INTO user (username, email, password) VALUES ('${
                  req.body.username
                }', ${db.db.escape(req.body.email)}, ${db.db.escape(hash)})`,
                (err, result) => {
                  if (err) {
                    throw err;
                    return res.status(400).send({
                      msg: err,
                    });
                  }
                  return res.status(201).send({
                    msg: "The user has been registerd with us!",
                  });
                }
              );
            }
          });
        }
      }
    );
  });

const login =
  (loginValidation,
  (req, res, next) => {
    db.db.query(
      `SELECT * FROM user WHERE email = ${db.db.escape(req.body.email)};`,
      (err, result) => {
        // user does not exists
        if (err) {
          throw err;
          return res.status(400).send({
            msg: err,
          });
        }
        if (!result.length) {
          return res.status(401).send({
            msg: "Email or password is incorrect!",
          });
        }
        // check password
        bcrypt.compare(
          req.body.password,
          result[0]["password"],
          (bErr, bResult) => {
            // wrong password
            if (bErr) {
              throw bErr;
              return res.status(401).send({
                msg: "Email or password is incorrect!",
              });
            }
            if (bResult) {
              const token = jwt.sign(
                { id: result[0].id },
                "the-super-strong-secrect",
                { expiresIn: "1h" }
              );
              db.db.query(
                `UPDATE user SET last_login = now() WHERE id = '${result[0].id}'`
              );
              return res.status(200).send({
                msg: "Logged in!",
                token,
                user: result[0],
              });
            }
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }
        );
      }
    );
  });
const getuser =
  (signupValidation,
  (req, res, next) => {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer") ||
      !req.headers.authorization.split(" ")[1]
    ) {
      return res.status(422).json({
        message: "Please provide the token",
      });
    }
    const theToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    db.db.query(
      "SELECT * FROM user where id=?",
      decoded.id,
      function (error, results, fields) {
        if (error) throw error;
        return res.send({
          error: false,
          data: results[0],
          message: "Fetch Successfully.",
        });
      }
    );
  });


const remove = (req, res) => {
  var delsql = "SELECT FROM playlist WHERE id = ?";
  db.query(delsql, [req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};
const update = (req, res) => {
  JSON.stringify;
  var delsql = "UPDATE playlist WHERE id = ?";
  db.query(delsql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};

// Getting The Array of Song for Specfic user
const GetPlaylistSong = function (User, callback) {
  db.db.query(`SELECT songs FROM playlist WHERE id = '${User}'`, (err, rez) => {
    if (err) callback(null);
    else callback(rez);
  });
};

// Posting a Song in Playlist Is like Updating the array in the Playlist table For Specfic user
var PostSongs = function (Data, callback) {
  GetPlaylistSong(Data["user"], function (rez) {
    var arr = JSON.parse(rez);
    arr.push(Data["songs"]);
    db.db.query(
      `UPDATE playlist SET songs='${arr}' WHERE id='${Data["user"]}'`,
      (err, rez) => {
        if (err == null) callback(null);
        else callback(rez);
      }
    );
  });
};
module.exports = {
  remove,
  PostSongs,
  register,
  login,
  getuser,
};
