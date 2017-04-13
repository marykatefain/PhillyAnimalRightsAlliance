var nunjucks = require("nunjucks");

var express = require("express");

var events = require("./data/data.json");

var fs = require("fs");

var app = express();

app.use(express.static('/assets'));

app.use('/assets', express.static('assets'));


nunjucks.configure("views", {
  autoescape: true,
  express: app
})

app.get("/", function (req, res){
  res.render("index.njk")
})

app.listen(3000);
