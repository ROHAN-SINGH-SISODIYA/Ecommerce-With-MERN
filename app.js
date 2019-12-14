const express =require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=>console.log("DB Connected"));

app.get('/',(req,res)=>{
    res.send("hello from node");
});

const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})