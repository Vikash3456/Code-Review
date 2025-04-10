const express = require('express');
const aiRoutes=require('./routes/ai.routes')
const app=express() //  create server instance  and run on port 3000  [if we use only express() it just create server instance ]
const cors=require('cors')


app.use(cors())
app.use(express.json())

 app.get('/',(req,res) =>{
    res.send('hello world')
 } )

app.use('/ai',aiRoutes)



module.exports=app;
