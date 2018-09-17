var mongoose = require('mongoose');

var workoutActiveSchema = new mongoose.Schema({
    workout_id: [{ type: Schema.Types.ObjectId, ref: 'workout_collection', required: true }],
    start_time: String,
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    end_time: String,
    comment: String,
    status: Boolean,
});

module.exports = mongoose.model('workout_active', workoutActiveSchema);