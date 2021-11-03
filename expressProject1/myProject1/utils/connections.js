const { MongoClient } = require('mongodb');    //importing mongoclient from the mongo db

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mainProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  //const db = client.db(dbName);
  //const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return client;
}
exports.connection = connection





// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());