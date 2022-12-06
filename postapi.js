const express=require('express')
const multer=require('multer')
const bodyParser=require('body-parser')
const port= 8050;

const app= express();

//url query

app.post('/query',(req,res)=>{
    let firstName=req.query.firstname
    let city=req.query.city
    res.status(200)
    res.end(`My name is ${firstName} and i live in ${city}`)
})


//header request

app.post('/header',(req,res)=>{
    
    let userName= req.header('username')
    let passWord= req.header('password')
    res.end(`${userName} this is my username and ${passWord}this is my password`)
})

//body request

app.use(bodyParser.json())

app.post('/body',(req,res)=>{

    let jsonData= req.body
    let jsonString= JSON.stringify(jsonData)
    res.send(jsonString)


})


app.listen(port,()=>{

    console.log(`site running on this url http://localhost:8050`)

})
