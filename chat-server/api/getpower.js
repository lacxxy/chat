var app = require('express')();
var mongoose = require('mongoose');
var powerScheMa = require('../db/power');
var power = mongoose.model('power', powerScheMa);
exports.getpower = function (req, res, next) {
    let username = req.query.username;
    power.find({
        username: username
    }, function (err, data) {
        res.send(JSON.stringify(data[0]));
    })
    return;
};