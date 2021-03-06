const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const https = require('https');
var path = require('path');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dbname = 'skatemaps';      // REPLACE WITH YOUR DB NAME
const server = '73.37.45.136:27017';
const url = "mongodb://mongoadmin0:Prestond234@73.37.45.136:27017/skatemaps";
const BodyParser = require("body-parser");
var publicDir = path.join(__dirname,'php');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var httpsServer = https.createServer(options, app);

httpsServer.listen(port);

//functions and actions

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/',function (req, res) {
  res.render('pages/maps');
})

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extend: true }));
app.post("/register", async (request, response) => {
  try {
      request.body.password = Bcrypt.hashSync(request.body.password, 10);
      var user = new UserModel(request.body);
      var result = await user.save();
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
});

var userSchema = new Schema({
  username: String,
  password: String
});

// hash the password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is validss
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
var User = mongoose.model('user', userSchema);
module.exports = User;

//app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));

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

};

//usage

/*await createListing(client,

  {

      name: "Lovely Loft",

      summary: "A charming loft in Paris",

      bedrooms: 1,

      bathrooms: 1

  }

);*/

// hash the password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('user', userSchema);
module.exports = User;


main().catch(console.error);