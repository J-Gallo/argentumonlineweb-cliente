var express = require('express'),
  app = express();

exports.index = (req, res, next) => {
    res.render('index');
};
