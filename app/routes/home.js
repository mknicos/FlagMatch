'use strict';
var _ = require('lodash');

exports.index = function(req, res){
  var flagF = _.sample(global.flags, 5);
  var flagC = _.shuffle(flagF);
  res.render('home/index', {flagF: flagF, flagC: flagC, title: 'Match a Flag'});
};

