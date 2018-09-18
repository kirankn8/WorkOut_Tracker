const express = require('express');
const router = express.Router();
const workout_category = require('./controllers/workout_category.controller');
const workout_active = require('./controllers/workout_active.controller');
const workout_collection = require('./controllers/workout_collection.controller');


// Routes
router.get('/', (req, res) => res.send('The app is up and running!'));
router.get('/health', (req, res) => res.send('The app is healthy'));

router
    .post('/workout-category', workout_category.new_workoutCategory)
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