var logger = require('morgan');
var express = require('express');
var fs = require('fs');
var accessLogger = fs.createWriteStream('access.log', {
  flags: 'a'
});
const bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
var http = require('http').Server(app);
var cors = require('cors');
var io = require('socket.io')(http);
var getmes = require('./api/getmes');
var getchatlist = require('./api/getchatlist');
var ifuser = require('./api/ifuser');
var login = require('./api/login');
var addpower=require('./api/addpower');
var getgrouplist = require('./api/getgrouplist');
var creat_group = require('./api/creat_group');
var getgroupmes = require('./api/getgroupmes');
var getpower = require('./api/getpower');
var rvfile=require('./api/rcv_file');
var rmvchatlist=require('./api/rmvchatlist');
var chgpwd=require('./api/chgpwd');
var connection = require('./socket/connection').connection;
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger('dev'));
app.use(logger({
  stream: accessLogger
}));
app.get('/getmes', getmes.getmes);
app.get('/getchatlist', getchatlist.getchatlist);
app.get('/getgroupmes', getgroupmes.getgroupmes);
app.get('/ifuser', ifuser.ifuser);
app.get('/getpower', getpower.getpower);
app.use('/login', login);
app.use('/getgrouplist', getgrouplist);
app.use('/creat_group', creat_group);
app.use('/addpower',addpower);
app.use('/rmvchatlist',rmvchatlist);
app.use('/rvfile',rvfile);
app.use('/chgpwd',chgpwd);
io.on('connection', function (socket) {
  connection(socket, io);
});
http.listen(3005, function () {
  console.log('listening on *:3005');
});