const passport = require('passport');
const express = require('express');
const router = express.Router();
require('../passport/google.js');
const {create} = require('./utiles.js');

router.get('/isAdmin', (req,res) => {
  if (req.user) {
    if (req.user.role_id ===3) {
      res.json({isAdmin: true});
    }
  } res.json({ isAdmin: false});
});
router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }
    try{
       const token = await create(user);
        res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
    }
    catch(error){
      res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);

    }
  })(req, res, next);
});


module.exports = router;
