var router = require("express").Router();
const controllers = require("../controllers/controllers");

router.post("/register", controllers.register);
router.post("/getuser", controllers.getuser);
router.post("/login", controllers.login);
router.put("/updateuser/:id", controllers.updateUser);
router.get("/getUserInfo/:id", controllers.getUserInfo);





//just test for pushing github
router.delete("/delete", controllers.removefrompl);


router.put("/updateplname", controllers.updateplname);
module.exports = router;
