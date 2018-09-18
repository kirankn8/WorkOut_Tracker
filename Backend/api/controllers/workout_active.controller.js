var workoutActiveModel = require('../models/workout_active.model');
const httpStatusCode = require('../httpCodes');

exports.new_workoutActive = function (req, res) {
    var workoutActive = new workoutActiveModel(req.body);

    workoutActive.save(function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.status(201).json(httpStatusCode(201));
    });
}

exports.find_workoutActive = function (req, res) {
    workoutActiveModel.find({ _id: req.params.id }, function (err, docs) {
        if (err) res.status(404).json(httpStatusCode(404));
        res.json(docs);
    })
}

exports.update_workoutActive = function (req, res) {
    workoutActiveModel.updateOne({ _id: req.params.id }, req.body, function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(docs);
    });
}

exports.delete_workoutActive = function (req, res) {
    workoutActiveModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(httpStatusCode(200, 'DELETE'));
    });
}