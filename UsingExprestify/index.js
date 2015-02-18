//var express = require('express') // Express node module, Helps to write GET and POST calls in a easy way.
var curValue = "none"; // Shared Variable used to share data between GET and POST Request. Not ideal. Should use a DB.
var rest = require('exprestify')

var app = express(); // Init express.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // Allow cross rigin requests, as the client and server arenot on the same domain.
opt = {
    extended: false
}
var options = {
    contentType: "json",
    config: opt
}
rest.get('/number', function(){
      return curValue;
})
rest.post('/number', function (err, data) {
    if (!err) {
        console.log(data.value);
        curValue = data.value;
        console.log(curValue);
        return curValue;
    } else {
        console.log(err);
    }
}, options)
rest.listen(process.env.PORT||3000, function () {
    console.log("Listening on port 0.0.0.0:%s", rest.port)
})
