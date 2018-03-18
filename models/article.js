var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var articleSchema=new Schema({
  "title":String,
  "content":String,
  "date":String,
  "type":String,
  "lessContent":String,
  });

module.exports = mongoose.model('article',articleSchema);
