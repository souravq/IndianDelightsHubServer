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

app.get("/chef/:id", (req,res)=>{
    const id = req.params.id;
    console.log(id);
    const ChefData = chefData.filter((data)=>data.id==id);
    console.log(ChefData);
    res.send(ChefData);
})

app.listen(port,()=>{
    console.log(`App is listening at ${port} `);
})