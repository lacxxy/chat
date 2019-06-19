var mongoose = require('mongoose');
var user = mongoose.connect('mongodb://127.0.0.1:27017/test'); //mongodb默认端口27017.
var Schema = mongoose.Schema; //创建模型
var user_groupSchema = new Schema({
    name: String,
    group: Array,
});
module.exports = user_groupSchema;