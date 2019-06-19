var app = require('express')();
var mongoose = require('mongoose');
var chatlistSchema = require('../db/chatlist');
var chatlist = mongoose.model('chatlists', chatlistSchema);
exports.getchatlist = function (req, res, next) {
    chatlist.find({
        name: req.query.name
    }, function (err, data) {
        if (data[0] != undefined) {
            res.send(data[0].other);
        } else {
            res.send([]);
        }
    })
    return;
};