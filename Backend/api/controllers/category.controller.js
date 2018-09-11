var categoryModel = require('../models/category.model');

exports.new_category = function (req, res) {
    var categ = new categoryModel({ name: 'categ1' });

    categ.save(function (err, docs) {
        if (err) return handleError(err);
        res.json(docs);
    });
}

exports.find_category = function (req, res) {
    categoryModel.find({ _id: req.params.id }, function (err, docs) {
        if (err) res.json(err);
        res.json(docs);
    })
}

exports.update_category = function (req, res) {
    categoryModel.updateOne({ _id: req.params.id }, { name: req.body.name }, function (err, docs) {
        if (err) return handleError(err);
        res.json(docs);
    });
}

exports.delete_category = function (req, res) {
    categoryModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
    });
}