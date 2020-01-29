const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose= require("mongoose");
const Todo = require('./schema/todo');
const router = express.Router()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS,PUT")
    next();    
})
mongoose.connect("mongodb+srv://sj_123:mongodb1234@cluster0-9lack.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology:true,useFindAndModify: false}).then(()=>{
    console.log("mongodb connect");
}).catch((error)=>{
    console.log("Error occured."+error);
})

app.get('/api/todo',(req,res,next) => {
  Todo.find().then(docs=>{
    res.status(200).json({
        todo: docs,
        message: " data successfully."
    });
  }).catch(error=>{
      console.log(error);
  })
    
})

app.post('/api/newuser',(req,res,next) => {
    console.log("Calling of New user");
    let body = new Todo({
        title:req.body.title,
        message:req.body.message,
        price:req.body.price,
        date:req.body.date
    })
    body.save()
    res.status(201).json({
    message: "Note added successfully"
    })
})

app.delete("/api/list/:id",(req,res,next)=>{
    console.log("calling of deleted",req.params.id);
    Todo.deleteOne({_id: req.params.id},err => {
        console.log(err);
    })
    res.status(202).json({
        message: "Note deleted successfully"
        })
})
app.put('/api/updateUser/:id',(req,res,next) => {
    console.log("Calling of update New user");
    let body = {
        _id: req.params.id,
        title:req.body.title,
        message:req.body.message,
        price:req.body.price,
        date:req.body.date
    }
    Todo.findOneAndUpdate({_id: req.params.id},{$set:body},(data,error)=>{
        res.status(203).json({
            message: "update successfully"
            })
    })
    
})

/**
 * Search Query
 */

app.post('/api/search',(req,res,next)=> {
    var regexQuery = {
        title: new RegExp(req.body.text, 'i'),
    }
    Todo.find(regexQuery).then(docs => {
        res.status(206).json({
            message: "fetched",
            todo: docs
        })
    })
})
/**
 * sort
 */
app.get('/api/sort',(req,res,next) => {
    Todo.find().sort({title:1}).then(docs=>{
      res.status(200).json({
          todo: docs,
          message: " data successfully."
      });
    }).catch(error=>{
        console.log(error);
    })
      
  })

module.exports = app;