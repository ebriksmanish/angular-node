const user = require('../models/schema');
const express = require('express');
const auth = express.Router();


// profile api
auth.get('/profile', function (req, res) {
    let value = {};
    user.find(value, function(err, results){
      if(err) res.json(err);
      res.json(results);
    });
});
  
module.exports = auth;