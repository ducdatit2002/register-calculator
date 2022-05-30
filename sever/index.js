const express = require('express')
const app =express()
const port = 5000
const user = []
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
let i = 0;
app.post('/register',(req,res)=>
{
    console.log(req.body);
    res.send("received data from client");
})

app.post('/login',(req,res)=>
{
    console.log(req.body);
    res.send("received data from client");
})

app.listen(port,()=>
{

})