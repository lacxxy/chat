var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var app = express();
var fs = require('fs');; //运用中间件，并且指明文件名,此名需要同html input name的文件名一致，否则会报错 文件显示在客户端指定路由路径下 
router.post('/', function (req, res) {
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/files";
    form.parse(req, function (err, fields, files) {
        fs.renameSync(files.file.path, form.uploadDir + '/' + files.file.name);
        res.send('');
    });
});
router.post('/post_head', function (req, res) {
    let username;
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/headpic";
    form.parse(req, function (err, fields, files) {
        let path=`./public/headpic/${fields.username}`;
        fs.mkdir(path,function(){});
        fs.renameSync(files.file.path, path + '/'+fields.username+'.jpg');
        res.send('1');
    });
});
router.post('/get_head', function (req, res) {
    let username;
    req.on("data",function(body){
        username=JSON.parse(body).username;
        fs.readdir('./public/headpic',function(err,dir){
            if(err){
                res.send("../../assets/head.jpg");
            }else{
                let dirname=dir.find((value,index,arr)=>{
                    return value==username;
                });
                if(dirname==undefined)res.send("../../assets/head.jpg");
                else res.send(`http://111.230.63.143:3005/headpic/${dirname}/${dirname}.jpg`);
            }
        })
    })
});
router.get('/get_file', function (req, res) {
    fs.readdir('public/files', function (err, files) {
        if (err) {
            throw err;
        }
        res.send(files);
        console.log(files);
    });
});
router.get('/download_file', function (req, res) {
    let filename=req.query.filename;  
    fs.readdir('public/files', function (err, files) {
        if (err) {
            throw err;
        }
        res.download(`public/files/${filename}`);
    });

});
module.exports = router;