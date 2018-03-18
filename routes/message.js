
var express=require('express');
var router =express.Router();
var mongoose=require('mongoose');
var message=require("../models/message");

router.get("/getMessage" ,function(req,res,next){
  message.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        },
      });
    }
  })
});
router.post('/addMessage', function(req, res){
    let nowdate=new Date()
    let newComment = {
        name: req.body.name,
        content: req.body.content,
        date: nowdate,
        Email: req.body.Email,
    }
    message.create(newComment, function (err,doc) {
    if (err) {
      res.json ({
        status: "1",
        msg: err.message,
        result:''
      })
    } else {
      res.json ({
        status: '0',
        msg: '',
        result: 'suc'
      })
    }
})

});
router.post('/deleteMessage', function(req, res){
    let conditions={ _id: req.body._id };
    message.remove(conditions, function (err,doc) {
    if (err) {
      res.json ({
        status: "1",
        msg: err.message,
        result:''
      })
    } else {
      res.json ({
        status: '0',
        msg: '',
        result: 'suc'
      })
    }
})

});
module.exports = router;
