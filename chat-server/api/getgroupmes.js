var app = require('express')();
var mongoose = require('mongoose');
var mesScheMa = require('../db/mes');
var mes = mongoose.model('mes', mesScheMa);
exports.getgroupmes = function (req, res, next) {
    let name1 = req.query.name1;
    let name2 = req.query.name2;
    mes.find({
        type: 'group',
        to: name2,
    }, function (err, data) {
        res.send(data);
    })
    return;
};