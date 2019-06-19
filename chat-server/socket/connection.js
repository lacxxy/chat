var app = require('express')();
var mongoose = require('mongoose');
var chatlistScheMa = require('../db/chatlist');
var chatlist = mongoose.model('chatlist', chatlistScheMa);
var groupScheMa = require('../db/group');
var group = mongoose.model('group', groupScheMa);
var mesSchema = require('../db/mes');
var mes = mongoose.model('mes', mesSchema);
let connect_user = new Array;
module.exports = {
    connect_user: connect_user,
    connection: function connection(socket, io) {
        socket.on('getid', function (data) {
            connect_user[data.username] = socket.id;
        })
        socket.on('mes', function (data) {
            let mesmes = [];
            if (data.type == 'user') {
                chatlist.find({
                    name: data.to
                }, function (err, res) {
                    let other = [];
                    let flag = 0;
                    for (let i = 0; i < res[0].other.length; i++) {
                        if (res[0].other[i] == data.from) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 0) {
                        other = res[0].other;
                        other.push(data.from);
                        chatlist.updateOne({
                            name: data.to
                        }, {
                            other: other
                        }, function (err) {});
                    }
                });
                chatlist.find({
                    name: data.from
                }, function (err, res) {
                    let other = [];
                    let flag = 0;
                    for (let i = 0; i < res[0].other.length; i++) {
                        if (res[0].other[i] == data.to) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 0) {
                        other = res[0].other;
                        other.push(data.to);
                        chatlist.updateOne({
                            name: data.from
                        }, {
                            other: other
                        }, function (err) {});
                    }
                });
                if (io.sockets.connected[connect_user[data.to]]) {
                    io.sockets.connected[connect_user[data.to]].emit('chatmes', data);
                }
            } else {
                group.find({
                    groupname: data.to
                }, function (err, res) {
                    for (let i of res[0].group_member) {
                        if (io.sockets.connected[connect_user[i]]) {
                            io.sockets.connected[connect_user[i]].emit('groupmes', data);
                        }
                    }
                })
            }
            mes.insertMany(data, function (err, res) {});
            //若接受消息方消息列表中无
        });
    }
}