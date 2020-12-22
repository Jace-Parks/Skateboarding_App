const express = require('express');
const MongoClient = require('mongodb').MongoClient;
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
const dbname = 'skatemaps';      // REPLACE WITH YOUR DB NAME
const server = '73.37.45.136:27017';
const url = "mongodb://mongoadmin0:Prestond234@73.37.45.136:27017/skatemaps";
//const client = new MongoClient(url);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/',function (req, res) {
  res.render('pages/maps');
});


app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));

async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb://smadmin:Prestond234$@73.37.45.136:27017/skatemaps";


  const client = new MongoClient(uri);

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
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createListing(client, newListing){

  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

  console.log(`New listing created with the following id: ${result.insertedId}`);

}

main().catch(console.error);
