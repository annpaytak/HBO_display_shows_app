//secret routes
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt //func
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

//generate object otions to use with this strategy
const options = {
  // object method take token from header
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt//secret key we use in gen token
}

//exports function from app.js
module.export = passport => {
  passport.use(//add plagins
    new JwtStrategy(options, async (payload, done) => {//add to passport new strategy 
      try{
        //find user in db, get model of user with which we work
        //get user by ID and get his email and id
        const user = await User.findById(payload.userId).select('email id')

        if(user){
          //if user in db found
          done(null, user)//first param error, if no error = null
          //add data to request and transfer user
        } else{
          //if no user in db
          done(null, false)
        }
      } catch(e) {
        console.log(e);
        
      }
      
    })
  )
}
/*var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));*/