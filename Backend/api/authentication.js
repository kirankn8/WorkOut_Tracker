var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.model');

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log("hello");
        return done(null, { msg: "Yes validated" });
        // User.findOne({ username: username }, function (err, user) {
        //     if (err) { return done(err); }
        //     if (!user) {
        //         return done(null, false, { message: 'Incorrect username.' });
        //     }
        //     if (!user.validPassword(password)) {
        //         return done(null, false, { message: 'Incorrect password.' });
        //     }
        //     return done(null, user);
        // });
    }
));