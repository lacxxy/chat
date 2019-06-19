var mongoose = require('mongoose');
var app = require('express')();
var express = require('express');
var router = express.Router();
var groupScheMa = require('../db/group');
var user_groupSchema = require('../db/user_group');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var connect_user = require('../socket/connection').connect_user;
router.post('/', function (req, res, next) {
    let mydata;
    req.on('data', function (data) {
        mydata = JSON.parse(data);
        var group = mongoose.model('group', groupScheMa);
        group({
            'groupname': mydata.group_name,
            'group_member': mydata.group_member,
        }).save();
        var group_list = mongoose.model('user_group', user_groupSchema);
        for (let i of mydata.group_member) {
            if (io.sockets.connected[connect_user[data.i]]) {
                io.sockets.connected[connect_user[i]].emit('newgroup', mydata.group_name);
            }
            let mygroup = [];
            group_list.find({
                name: i
            }, function (err, data) {
                mygroup = (data.length == 0) ? [] : data[0].group;
                mygroup.push(mydata.group_name);
                if (data.length > 0) {
                    group_list.updateOne({
                        name: i
                    }, {
                        name: i,
                        group: mygroup
                    }, function (err) {})
                } else {
                    group_list.insertMany({
                        name: i,
                        group: mygroup
                    })
                }
            });

        }
        res.end("success");
    });
});
module.exports = router;