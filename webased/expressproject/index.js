const express = require('express');
var MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb');
const assert = require('assert');
var path = require('path');
const app = express();
const port = 3001;
let mongoose = require('mongoose');
// Connection URL
//const url = 'mongodb://73.37.45.136:27017';
//const dbName = 'skatemaps';
// Create a new MongoClient
//const client = new MongoClient(url);
const dbname = 'admin';      // REPLACE WITH YOUR DB NAME
const server = '73.37.45.136:27017';
var url = "mongodb://73.37.45.136:27017/skatemaps";
const client = new MongoClient(url);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/',function (req, res) {
  res.render('pages/maps');
});


app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));


client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbname);

  client.close();
});

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database accessed!");

  //adding a new spot to db

  db.close();
});*/

/*async function main(){
  /*
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   

  console.log(ur);
  const client = new MongoClient(ur);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
  console.log('connected!')
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//mongoose.connect("mongodb://73.37.45.136:27017/admin", {useNewUrlParser: true, useUnifiedTopology: true});

/*class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()
*/

//main().catch(console.error);

