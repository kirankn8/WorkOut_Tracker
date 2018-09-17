var mongoose = require('mongoose');

var workoutCategorySchema = new mongoose.Schema({
    category_name: String
});

module.exports = mongoose.model('workout_category', workoutCategorySchema);