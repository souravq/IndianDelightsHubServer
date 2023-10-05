const express = require('express');

const cors = require('cors');

const chefData = require('./MockData/chef.json');

const app = new express();

app.use(cors());

const port = 5000;

app.get("/",(req,res)=>{
   res.send("Hello world"); 
})

app.get("/chef", (req,res)=>{
    res.send(chefData);
})



app.listen(port,()=>{
    console.log(`App is listening at ${port} `);
})