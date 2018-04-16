const user = require('../models/schema');
const express = require('express');
const router = express.Router();
const auth = require('./auth');

// Requiring JsonWebToken

const jwt = require('jsonwebtoken');

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
      else if(result){
        let myToken = jwt.sign({ id: user._id }, "secretkey", { expiresIn: 86400 });
        console.log('token 2 token', myToken);
        // return res.json({ result : result, token : myToken})
        return res.status(200).send({myToken});
    }   
  });
});

// verifying nothing else
// x-access-token in header and token number , only one parameter
router.get('/me', function(req, res) {
  let myToken = req.headers['x-access-token'];
  if (!myToken) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(myToken, "secretkey", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    return res.json({decoded: decoded, message: 'yahoo'})
    // res.status(200).send(decoded);
  });
});


router.use('/auth/*', function(req, res, next) {
  let myToken = req.headers['x-access-token'];
  if (!myToken) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(myToken, "secretkey", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    return next()
    // res.status(200).send(decoded);
  });
});

router.use('/auth', auth);

module.exports = router;