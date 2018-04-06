const user = require('../models/schema');
const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
});
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
});

// define the about route
router.post('/register', function (req, res) {
  let value = {
    username : req.body.username,
    email : req.body.email,
    password : req.body.password
  };
  user.create(value, function(err, result){
    if(err) res.json(err);
    res.json(result);
  });
});

module.exports = router;