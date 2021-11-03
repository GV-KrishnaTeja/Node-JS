const {MongoClient,ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL ,{ useNewUrlParser:true},(error,client) => {
    if (error){
        return console.log('unable to connect to database!')
    }

    const db = client.db(databaseName)

   // db.collection('user').insertOne({
     //   name: 'GVKT',
      //  age: 22
    //})

    // db.collection('user').insertMany([
    //     {
    //         name:'srinu',
    //         age: 23
    //     },{
    //         name:'raghu',
    //         age:26
    //     }
    // ],(error,result) => {
    //     if (error){
    //         return console.log('unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })
    //  db.collection('users').findOne({name:'raghu'},(error,user) =>{
    //      if (error){
    //          return console.log('unable to fetch')
    //      };
    //      console.log(user)
    //  })

    // const updatePromise =db.collection('user').updateOne({
    //     _id: new ObjectId("617691fa89e1981650cc2e95")
    
    // },{
    //     $set:{
    //         name:'mike'
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)

   // })


   db.collection('users').deleteOne({
       name:"raghu"
      }).then((result) =>{
          console.log(result)
      }).catch((error) =>{
          console.log(error)

      })




     
})