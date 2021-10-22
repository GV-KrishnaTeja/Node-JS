const express= require('express')     //initaiting express library

const app = express()

app.get('',(req,res) =>{
    res.send('<h1>HELLO WELCOME TO NODE JS</h1>')
})

app.get('/help',(req,res) =>{
    res.send({
        name:'venkata',
        age:22
    })
})
app.get('/about',(req,res)=>{
    res.send('ALL THIS ABOUT PAGE')
})
app.get('/weather',(req,res)=>{
    res.send('WEATHER APP WELCOMES U ')
})

app.listen(3000,()=>{
    console.log('server port is upon the 3000')
})