var router = require('express').Router();
const controllers = require('../controllers/controllers');


router.delete("/delete", controllers.remove);
router.post("/register",controllers.register)
router.post("/getuser",controllers.getuser)
router.post("/login",controllers.login)


module.exports = router;
