var express=require('express');
var router =express.Router();
var mongoose=require('mongoose');
var article=require("../models/article");

mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

mongoose.connection.on("connected",function(){
  console.log("success.")
});
mongoose.connection.on("error",function(){
  console.log("error.")
});
mongoose.connection.on("disconnected",function(){
  console.log("disconnected.")
});

router.get("/getArticle" ,function(req,res,next){
  article.find({},function(err,doc){
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

router.get(/changeArticle/ ,function(req,res,next){
  console.log(req.query.type)
  article.find({"type":req.query.type},function(err,doc){
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

router.post('/addArticle', function(req, res){
    let nowdate=new Date()
    let newarticle = {
        title: req.body.title,
        content: req.body.content,
        date: nowdate,
        type: req.body.type,
        lessContent: req.body.lessContent,
    }
    article.create(newarticle, function (err,doc) {
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


router.post('/deleteArticle', function(req, res){
    let conditions={ _id: req.body._id };
    article.remove(conditions, function (err,doc) {
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

module.exports=router;
