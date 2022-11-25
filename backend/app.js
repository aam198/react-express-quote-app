const express = require('express');
const Quote = require('inspirational-quotes');

const app = express();

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