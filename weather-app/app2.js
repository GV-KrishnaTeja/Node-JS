const request = require('request')

const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1Ijoia3Jpc2huYXRlamFndiIsImEiOiJja3V5ZTg5bTYwZTNzMnBwYjNjb3VmcnN6In0.T_EEkJhvbdtKEjdYKonpuA'
request({url:url,json: true},(error,response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(longitude,latitude);
})