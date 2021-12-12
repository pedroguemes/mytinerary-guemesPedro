const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest:extraxtJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.S_KEY},
         (jwt_payload, done)=>{
            User.findOne({_id:jwt_payload._doc._id})
            .then(user => {
                    if (user){
                        return done(null, user)
                    }else{
                        return done(null, false)
                        
                    }
            })
           
            .catch(err=>{
                console.log(err)
                return done(err, false)})
         }))