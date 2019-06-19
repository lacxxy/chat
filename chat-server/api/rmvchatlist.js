var express=require('express');
var chatlistScheMa=require('../db/chatlist');
var mongoose=require('mongoose');
var cl=mongoose.model('chatlist',chatlistScheMa);
var router=express.Router();
router.post('/',function(req,res,next){
    let body;
    req.on('req',function(data){
        body=JSON.parse(data);
        cl.find({name:body.username},function(data){
            let other=data[0].other;
            other.splice(other.findIndex(i=>i==body.username),1);
            cl.updateOne({name:body.username},{other:other});
        });
    });
    res.end('1');
})
module.exports=router;