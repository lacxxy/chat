var app = require('express')();
var mongoose = require('mongoose');
var mesScheMa = require('../db/mes');
var mes = mongoose.model('mes', mesScheMa);
exports.getmes = function (req, res, next) {
    let name1 = req.query.name1;
    let name2 = req.query.name2;
    mes.find({
        $or: [{
            from: name1,
            to: name2
        }, {
            from: name2,
            to: name1
        }]
    }, function (err, data) {
        res.send(data);
    })
    return;
};