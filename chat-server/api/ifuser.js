var app = require("express")();
var mongoose = require('mongoose');
var userScheMa = require('../db/user');
var user = mongoose.model('user', userScheMa);
exports.ifuser = function (req, res, next) {
    let username = req.query.name;
    user.find({
        name: username
    }, function (err, data) {
        if (data[0] == undefined) {
            res.send("0");
            return;
        } else {
            res.send("1");
            return;
        }
    })
}