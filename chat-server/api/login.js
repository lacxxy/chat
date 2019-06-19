var express = require('express');
var mongoose = require('mongoose');
var userScheMa = require('../db/user');
var user = mongoose.model('user', userScheMa);
var router = express.Router();
router.post('/', function (req, res, next) {
    let reqbody;
    req.on('data', function (body) {
        reqbody = JSON.parse(body);
        user.find({
            name: reqbody.username,
            password: reqbody.password
        }, function (err, data) {
            if (data[0] == undefined) {
                res.end("0");
            } else {
                res.end("1");
            }
        });
    })
    return;
})
module.exports = router;