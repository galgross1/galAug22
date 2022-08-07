"use strict";

var express = require("express");

var cors = require("cors"); //CORS is an HTTP-header based mechanism that allows a server to indicate any origins
// (domain, scheme, or port) other than its own from which a browser should permit loading resources.


var app = express();
app.use(cors());
app.get("/", function (req, res) {
  res.json([{
    id: "1",
    title: "Book Review: The Bear & The Nightingale"
  }, {
    id: "2",
    title: "Game Review: Pokemon Brilliant Diamond"
  }, {
    id: "3",
    title: "Show Review: Alice in Borderland"
  }]);
});
app.listen(9090, function () {
  console.log("listening for requests on port 9090");
});