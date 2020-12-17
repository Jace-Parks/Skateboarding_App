const express = require('express')
var path = require('path')
const app = express();
const port = 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',function (req, res) {
  res.render('pages/home')
});

app.get('/ulamspiral',function (req, res) {
  res.render('pages/ulam')
});

app.get('/skatemaps',function (req, res) {
  res.render('pages/maps')
});


app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));
