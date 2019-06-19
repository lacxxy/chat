var express = require('express');
var mongoose = require('mongoose');
var powerSchema = require('../db/power.js');
var power = mongoose.model('power', powerSchema);
var userSchema = require('../db/user.js');
var user = mongoose.model('user', userSchema);
var chatlistSchema = require('../db/chatlist');
var chatlist = mongoose.model('chatlist', chatlistSchema);
var usergroupSchema = require('../db/user_group');
var user_group = mongoose.model('user_group', usergroupSchema);
var router = express.Router();
router.post('/adduser', function (req, res) {
    let bodydata;
    req.on('data', function (body) {
        bodydata = JSON.parse(body);
        user.find({
            name: bodydata.username,
            passwd: bodydata.passwd
        }, function (err, data) {
            if (data.length == 0) {
                user.insertMany({
                    name: bodydata.name,
                    password: bodydata.passwd
                });
                power.insertMany({
                    username: bodydata.name,
                    adduser: false,
                    deluser: false,
                    addadmin: false,
                    deladmin: false
                });
                chatlist.insertMany({
                    name: bodydata.name,
                    other: []
                });
                user_group.insertMany({
                    name: bodydata.name,
                    group: []
                });
                res.end("1");
            } else {
                res.end("0");
            }
        })
    })
});
router.post('/rmvuser', function (req, res) {
    let bodydata;
    req.on('data', function (body) {
        bodydata = JSON.parse(body);
        user.find({
            name: bodydata.name
        }, function (err, data) {
            if (data.length != 0) {
                user.remove({
                    name: bodydata.name
                }, function (err) {
                    console.log(err);
                });
                power.remove({
                    username: bodydata.name
                }, function (err) {});
                chatlist.remove({
                    name: bodydata.name
                }, function (err) {});
                user_group.remove({
                    name: bodydata.name
                }, function (err) {});
                res.end("1");
            } else {
                res.end("0");
            }
        })
    })
})
router.post(('/addadmin'), function (req, res) {
    let bodydata;
    req.on('data', function (body) {
        bodydata = JSON.parse(body);
        for(let i in bodydata){
            if(bodydata[i]==false){
                delete bodydata[i];
            }
        }   
        user.find({
            name: bodydata.username
        }, function (err, data) {
            if (data.length == 0) {
                res.end("0");
            } else {
                power.updateOne({
                    username: bodydata.username
                }, bodydata,function(err){
                    console.log(err);
                    if(err!=null){res.end("0")}
                    res.end("1");
                });
            }
        });
    })
})
router.post(('/deladmin'), function (req, res) {
    let bodydata;
    req.on('data', function (body) {
        bodydata = JSON.parse(body);
        for(let i in bodydata){
            if(bodydata[i]==true){
                delete bodydata[i];
            }
        }        
        user.find({
            name: bodydata.username
        }, function (err, data) {
            if (data.length == 0) {
                res.end("0");
            } else {
                power.update({
                    username: bodydata.name
                }, bodydata,function(err){
                    if(err!=null){res.end("0");}
                    res.end("1");
                });
            }
        });
    })
})
module.exports = router;