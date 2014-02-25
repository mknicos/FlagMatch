'use strict';
var _ = require('lodash');

exports.index = function(req, res){
  var random = _.random(2,4);
  var flagF = _.sample(global.flags, random);
  var flagC = _.shuffle(flagF);
  res.render('home/index', {flagF: flagF, flagC: flagC, title: 'Flag Matching'});
};

