// Require environment
require('.dotenv').config()

// Require node_modules 
let passport = require('passport')

// Require an Strategies (AKA types of auth we want to use)
let LocalStrategy = require('passport-local').Strategy

// Import a reference to our database
let db = require('../models')

// Serialization and Deserialization functions
// These are for passport to use in order to store/lookup the user info
// SERIALIZE: Reduce a user object to just its id field
passport.serializeUser((user, done) => {
    // Call the callback function with the user id as an arguement
    // done(error,id) - pass a null if no error 
    done(null, user.id)
})

// DESERIALIZE: Reverse the process of the serialize function
// In other words, taking an user's ID and returning the full user object
passport.deserializeUser((id, done) => {
    db.user.findByPk(id)
    .then(user =>{
        done(null, user)
    })
    .catch(done)
})

// LOCAL STRATEGY: Using a database that we manage outselves (not OAuth)
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    // Try looking up the user by their email
    db.user.findOne({
        where: { email: email}
    })
    .then(foundUser => {
        // Check if there is a user: also if yes, then check the password 
        if (foundUser && foundUser.validPassword(password)) {
            // GOOD - user exists and password is correct
            done(null, foundUser)
        }
        else {
            // BAD - user doesn't exist OR the password was bad
            done(null, null)
        }
    })
    .catch(done)
}))

// Make sure we can include this file into other files
module.exports = passport 