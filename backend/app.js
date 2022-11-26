const express = require('express');
const Quote = require('inspirational-quotes');

const app = express();


// CORS Policy add
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", function(req, res) {
  // To send when home route is accessed or requested from frontend
  res.send(Quote.getQuote());
});

let port = process.env.PORT;
if(port == null || port == "") {
  port = 5000;
}

app.listen(port, function() {
  console.log("Server started successfully");
});

console.log(Quote.getQuote());