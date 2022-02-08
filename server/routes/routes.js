var router = require('express').Router();
const controllers = require('../controllers/controllers');
var controllers = require('../controllers/controllers')
router.delete("/delete", controllers.remove);