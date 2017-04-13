var nunjucks = require("nunjucks");

var express = require("express");

var fs = require("fs");

var app = express();

app.use(express.static('/assets'));

app.use('/assets', express.static('assets'));

app.use('/fullcalendar', express.static('fullcalendar'));

app.use('/data', express.static('data'));

var events = require('./data/data.json');




nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.get("/", function (req, res){
  res.render("index.njk");
});

app.get("/about", function (req, res){
  res.render("about.njk");
});

app.get("/calendar", function (req, res) {
  res.render("calendar.njk", {
    events: events
  });
});

app.get("/campaigns", function (req, res){
  res.render("campaigns.njk");
});

app.get("/contact", function (req, res) {
  res.render("contact.njk");
});

app.get("/end_hdc", function (req, res){
  res.render("end_hdc.njk");
});

app.get("/resources", function (req, res) {
  res.render("resources.njk");
});

app.listen(3000);
