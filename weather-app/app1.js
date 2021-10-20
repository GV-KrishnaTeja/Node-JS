
const request = require('request')
const url= 'https://api.weatherstack.com/current?access_key=36f63d93b1df3011a95373c590ad2f54=17.3850,-78.4867'

request ({url:url}, (error,response) =>{
    console.log(response)
})
