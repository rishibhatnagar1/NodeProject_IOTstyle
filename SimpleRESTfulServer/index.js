''' Simple server for posting data into and getting response from, it uses express js, has been deployed on Heroku.'''

var http = require('http'),
    fs = require('fs'), // File system module , not required here though
    express = require('express'),
    bodyParser = require('body-parser')
var cV = "0"; //Current Value

var app = express(); //initialized app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) { //What happens when a post request is made to the server

  console.log(req.body.value);
  cV = req.body.value;
  res.json("Got Request");
console.log("After Post : " + cV);
})

app.get('/', function (req, res) { //What happens when a get request is made
console.log(cV)
  if(cV != "0"){
  res.send(cV);
  cV = "none";
}
else
{
res.send("0");
}
})

app.use(bodyParser.json());
//app.use(connect.bodyParser({strict: false}));
var server = app.listen(process.env.PORT || 3000, function () { //Run the server

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
