const express = require('express')
const port = 5000
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const users= [];
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))


function Authenticate(user)
{
    for(let i of users)
    {
        if(i.username===user.username && i.password===user.password)
            return true
    }
    return false
}

app.post('/register',(req,res)=>
{
    const user =
        {
            username:req.body.username,
            password:req.body.password
        }
    console.log(user)
    try{
        users.push(user)
        return res.json(true)
    }
    catch
    {
        return res.json(false)
    }
})

app.post('/login',(req,res)=>
{
    const user =
        {
            username:req.body.username,
            password:req.body.password
        }
    try
    {
        if(Authenticate(user))
            res.json(true)
        else
            res.json(false)
    }
    catch
    {
        return res.json(false)
    }
})

app.listen(port,()=>
{

})