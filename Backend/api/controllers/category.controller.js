var categoryModel = require('../models/category.model');
const httpStatusCode = require('../httpCodes');

exports.new_category = function (req, res) {
    var categ = new categoryModel({ name: 'categ1' });

    categ.save(function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.status(201).json(httpStatusCode(201));
    });
}

exports.find_category = function (req, res) {
    categoryModel.find({ _id: req.params.id }, function (err, docs) {
        if (err) res.status(404).json(httpStatusCode(404));
        res.json(docs);
    })
}

exports.update_category = function (req, res) {
    categoryModel.updateOne({ _id: req.params.id }, { name: req.body.name }, function (err, docs) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json(docs);
    });
}

exports.delete_category = function (req, res) {
    categoryModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) res.status(500).json(httpStatusCode(500));
        res.json({ msg: "Object deleted successfully" });
    });
}