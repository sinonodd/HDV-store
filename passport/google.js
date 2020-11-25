const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const users = require('../queries/users.js')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
 async (accessToken, refreshToken, profile, cb) => {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //return cb(err,user);
  //  });
    const email = profile.email[0].value;
    console.log(email)
   const user = await users.findByEmail(email);
   const googleUser = {
      username: profile.displayName,
      email: email,
      google_id: profile.id,  
      img_url: profile.photos[0].value
   };
   console.log(googleUser);

    if(user){
      //update the user
    } else {
      //insert the user
    }
    return cb(new Error('working on it'))
  }
));
