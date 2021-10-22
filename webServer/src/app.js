const path = require('path')
const express= require('express')     //initaiting express library

const app = express()
const publicDir = path.join(__dirname,'../public')
const viewspath =path.join(__dirname,'../views')

app.set('view engine','hbs')
app.set('views',views)
app.use(express.static(publicDir))


app.get ('/about',(req,res) =>{
    res.render('about',{
        title: 'done with about',
        name: 'krishna teja'
    })
})

app.listen(3000,()=>{
    console.log('server port is upon the 3000')
})