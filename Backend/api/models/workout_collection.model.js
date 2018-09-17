var mongoose = require('mongoose');

var workoutCollectionSchema = new mongoose.Schema({
    workout_title: String,
    workout_note: String,
    calories_burn_per_min: Number,
    category_id: [{ type: Schema.Types.ObjectId, ref: 'workout_category', required: true }],
});

module.exports = mongoose.model('workout_collection', workoutCollectionSchema);