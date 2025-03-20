const express = require('express');

 const app=express() //  create server instance  and run on port 3000  [if we use only express() it just create server instance ]




 app.get('/',(req,res) =>{
    res.send('hello world')
 } )





 module.exports=app;
