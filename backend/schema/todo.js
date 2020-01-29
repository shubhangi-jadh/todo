const mongoose = require("mongoose");
const todosschema = mongoose.Schema({
    
    title:{type:String,required:true},
    message:{type:String,required:true},
    price:{type:Number,required:true},
    date:{type:Date,required:true}
    
});
module.exports = mongoose.model("todo",todosschema);