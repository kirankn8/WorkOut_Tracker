var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutCategorySchema = new Schema({
    category_name: String
});

module.exports = mongoose.model('workout_category', workoutCategorySchema);