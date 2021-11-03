
const request = require('request')
const url= 'http://api.weatherstack.com/current?access_key==17.3850,-78.4867'

request ({url:url}, (error,response) =>{
    console.log(response)
})
