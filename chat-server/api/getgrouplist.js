var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var groupScheMa = require('../db/group');
var user_groupSchema = require('../db/user_group');
router.get('/', function (req, res,next) {
    let username = req.query.username;
    let user_group = mongoose.model('user_group', user_groupSchema);
    user_group.find({
        name: username
    }, function (err, data) {
        let send = data.length > 0 ? data[0].group : [];
        res.send(send);
    })
})
module.exports = router;