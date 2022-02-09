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
