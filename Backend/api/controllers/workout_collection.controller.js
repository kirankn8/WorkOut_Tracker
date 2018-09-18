var workoutCollectionModel = require('../models/workout_collection.model');
const httpStatusCode = require('../httpCodes');

exports.new_workoutCollection = function (req, res) {
    var workoutColl = new workoutCollectionModel(req.body);

    workoutColl.save(function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.status(201).json(httpStatusCode(201));
    });
}

exports.find_workoutCollection = function (req, res) {
    workoutCollectionModel.find({ _id: req.params.id }, function (err, docs) {
        if (err) res.status(404).json(httpStatusCode(404));
        res.json(docs);
    })
}

exports.update_workoutCollection = function (req, res) {
    workoutCollectionModel.updateOne({ _id: req.params.id }, req.body, function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(docs);
    });
}

exports.delete_workoutCollection = function (req, res) {
    workoutCollectionModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(httpStatusCode(200, 'DELETE'));
    });
}