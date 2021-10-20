const request = require('request')

const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/telangana.json?access_token=pk.eyJ1Ijoia3Jpc2huYXRlamFndiIsImEiOiJja3V5ZTg5bTYwZTNzMnBwYjNjb3VmcnN6In0.T_EEkJhvbdtKEjdYKonpuA'
request({url:url,json: true},(error,response) => {
 if (error){
     console.log('unsble to coneect server')
      }else if(response.body.features.length === 0) {
      console.log('cant find location')
      }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(longitude,latitude);
      }


})