var mongoose = require('mongoose');
var user = mongoose.connect('mongodb://127.0.0.1:27017/test'); //mongodb默认端口27017.
var Schema = mongoose.Schema; //创建模型
var groupScheMa = new Schema({
    'groupname': String,
    'group_member': Array,
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
module.exports = groupScheMa;