var router = require('express').Router();
const controllers = require('../controllers/controllers');
router.delete("/delete", controllers.remove);

module.exports = router;
