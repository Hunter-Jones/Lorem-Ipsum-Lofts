const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  // res.send("Hello world!");
  res.sendFile(__dirname + "/pages/home/home.html");
});
app.get("/home", (req, res) => {
  // res.redirect(__dirname);
});
app.get("/home.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/home/home.css"));
});

app.get("/apply", (req, res) => {
  res.sendFile(__dirname + "/pages/apply/apply.html");
});
app.get("/apply.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/apply/apply.css"));
});

app.get("/floor", (req, res) => {
  res.sendFile(__dirname + "/pages/floor/floor.html");
});
app.get("/floor.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/floor/floor.css"));
});

app.get("/tour", (req, res) => {
  res.sendFile(__dirname + "/pages/tour/tour.html");
});
app.get("/tour.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/tour/tour.css"));
});

app.get("/resident-links", (req, res) => {
  res.sendFile(__dirname + "/pages/resident-links/resident-links.html");
});
app.get("/resident-links.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/resident-links/resident-links.css"));
});

app.get("/resident-links/forum", (req, res) => {
  res.sendFile(__dirname + "/pages/resident-links/forum/forum.html");
});
app.get("/resident-links/rent", (req, res) => {
  res.sendFile(__dirname + "/pages/resident-links/rent/rent.html");
});
app.get("/resident-links/building-requests", (req, res) => {
  res.sendFile(__dirname + "/pages/resident-links/building-requests/building-requests.html");
});
