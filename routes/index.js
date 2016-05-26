var express = require('express'),
  router = express.Router(),
  homeController = require('../controllers/home.controller.js');

router.get('/', homeController.index);

module.exports = router;
