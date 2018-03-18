var mongoose=require('mongoose')
var Schema1=mongoose.Schema;

var messageSchema=new Schema1({
  "name":String,
  "Email":String,
  "date":String,
  "content":String,
  });

module.exports = mongoose.model('message',messageSchema);
