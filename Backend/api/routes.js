const express = require('express');
const router = express.Router();
const workout_category = require('./controllers/workout_category.controller');
const workout_active = require('./controllers/workout_active.controller');
const workout_collection = require('./controllers/workout_collection.controller');
// const passportService = require('./authentication');
const passport = require('passport');


passport.serializeUser(function (user, done) {
    console.log('Serialize user called.');
    done(null, user.name);
});

passport.deserializeUser(function (id, done) {
    console.log('Deserialize user called.');
    return done(null, { name: 'Oliver' });
});

var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.model');

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log("Inside Local Strategy");
        return done(null, { msg: "Yes validated" });
    })
);

const requireSignin = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
});

// Routes
router.get('/', (req, res) => res.send('The app is up and running!'));
router.get('/health', (req, res) => res.send('The app is healthy'));

router
    .post('/workout-category', requireSignin)
    // .post('/workout-category', requireSignin, workout_category.new_workoutCategory)
    .get('/workout-category/:id', workout_category.find_workoutCategory)
    .put('/workout-category/:id', workout_category.update_workoutCategory)
    .delete('/workout-category/:id', workout_category.delete_workoutCategory);

router
    .post('/workout-active', workout_active.new_workoutActive)
    .get('/workout-active/:id', workout_active.find_workoutActive)
    .put('/workout-active/:id', workout_active.update_workoutActive)
    .delete('/workout-active/:id', workout_active.delete_workoutActive);

router
    .post('/workout-collection', workout_collection.new_workoutCollection)
    .get('/workout-collection/:id', workout_collection.find_workoutCollection)
    .put('/workout-collection/:id', workout_collection.update_workoutCollection)
    .delete('/workout-collection/:id', workout_collection.delete_workoutCollection);

module.exports = router