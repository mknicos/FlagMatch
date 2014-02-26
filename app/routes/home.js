'use strict';
var _ = require('lodash');

exports.index = function(req, res){
  var flagF = _.sample(global.flags, 5);
  var flagC = _.shuffle(flagF);
  res.render('home/index', {flagF: flagF, flagC: flagC, title: 'Match a Flag'});
};


exports.match = function(req, res){
  console.log(req.query);
  var countryName = req.query.countryName;
  var flagCode = req.query.flagCode;
  var countryObj = _.find(global.flags, {'country':countryName});
  console.log(countryObj);
  console.log(countryObj.flag);
  if(flagCode === countryObj.flag){
    res.send({match: true});
  }else{
    res.send({match: false});
  }
};
