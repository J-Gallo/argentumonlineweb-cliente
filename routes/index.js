var express = require('express'),
  router = express.Router(),
  homeController = require('../controllers/home.controller.js'),
  userController = require('../controllers/user.controller.js'),
  rankingController = require('../controllers/ranking.controller.js'),
  registerController = require('../controllers/register.controller.js');

router.get('/', homeController.index);
router.get('/user/:name', userController.index);
router.get('/ranking', rankingController.index);
router.get('/register', registerController.index);

module.exports = router;
