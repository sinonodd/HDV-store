const passport = require('passport');
const express = require('express');
const router = express.Router();
require('../passport/google.js');
router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



module.exports = router;
