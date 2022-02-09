var router = require("express").Router();
const controllers = require("../controllers/controllers");

router.post("/register", controllers.register);
router.post("/getuser", controllers.getuser);
router.post("/login", controllers.login);

//just test for pushing github
router.delete("/delete", controllers.removefrompl);
router.post("/post", (req, res) => {
  controllers.PostSongs(req.body, (a, b) => {
    if (a) {
      console.log(a);
    }
    console.log(b);
  });
});
router.get("/get", (req, res) => {
  controllers.GetPlaylistSong((err, rez) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(rez);
      res.send(rez);
    }
  });
});

router.put("/updateplname", controllers.updateplname);
module.exports = router;
