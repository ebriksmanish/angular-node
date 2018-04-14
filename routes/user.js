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
router.get('/users', function (req, res) {
  let value = {};
  user.find(value, function(err, results){
    if(err) res.json(err);
    res.json(results);
  });
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
// delete api
router.delete('/user', function (req, res) {
  let criteria ={
      email : req.body.email
  };
  user.remove(criteria,function(err, results){
      if(err) return res.json(err);
      else return res.json(results);
  });
});

// login api
router.post('/login', function (req, res) {
  let criteria ={
      username : req.body.username,
      password : req.body.password
  };
  user.findOne(criteria,function(err, result){
      if(err) return res.json(err);
      else return res.json(result);
  });
});

module.exports = router;