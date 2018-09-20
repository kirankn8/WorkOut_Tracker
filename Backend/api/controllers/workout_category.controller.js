var workoutCategoryModel = require('../models/workout_category.model');
const httpStatusCode = require('../httpCodes');

exports.find_AllworkoutCategory = function (req, res) {
    workoutCategoryModel.find({}, function (err, docs) {
        if (err) res.status(404).json(httpStatusCode(404));
        res.json(docs);
    })
}

exports.new_workoutCategory = function (req, res) {
    var workoutCat = new workoutCategoryModel(req.body);

    workoutCat.save(function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.status(201).json(httpStatusCode(201));
    });
}

exports.find_workoutCategory = function (req, res) {
    workoutCategoryModel.find({ _id: req.params.id }, function (err, docs) {
        if (err) res.status(404).json(httpStatusCode(404));
        res.json(docs);
    })
}

exports.update_workoutCategory = function (req, res) {
    workoutCategoryModel.updateOne({ _id: req.params.id }, req.body, function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(docs);
    });
}

exports.delete_workoutCategory = function (req, res) {
    workoutCategoryModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(httpStatusCode(200, 'DELETE'));
    });
}