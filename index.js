const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs")
app.use(express.json());       
app.use(express.urlencoded({extended: true}));

app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'public')));

// forumData = require("forum")
// var mongo = require('mongodb');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


app.get("/", (req, res) => {
  // res.send("Hello world!");
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/home", (req, res) => {
  // res.redirect(__dirname);
});
app.get("/home.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.css"));
});

app.get("/apply", (req, res) => {
  res.sendFile(__dirname + "/views/apply.html");
});
app.get("/apply.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/apply.css"));
});

app.get("/floor", (req, res) => {
  res.sendFile(__dirname + "/views/floor.html");
});
app.get("/floor.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/floor.css"));
});

app.get("/tour", (req, res) => {
  res.sendFile(__dirname + "/views/tour.html");
});
app.get("/tour.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/tour.css"));
});

app.get("/resident-links", (req, res) => {
  res.sendFile(__dirname + "/views/resident-links.html");
});
app.get("/resident-links.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/resident-links.css"));
});

app.get("/resident-links/forum", (req, res) => {
  res.sendFile(__dirname + "/views/forum.html");
});
app.get("/resident-links/rent", (req, res) => {
  res.sendFile(__dirname + "/views/rent.html");
});
app.get("/resident-links/building-requests", (req, res) => {
  res.sendFile(__dirname + "/views/building-requests.html");
});


app.post("/resident-links/forum/", (req, res) => {
  const username = req.body.username;
  const header = req.body.header;
  const message = req.body.message
  // res.send("Data received");
  console.log("Username: " + username);
  console.log("Password: " + header);
  console.log("Meessage: " + message);
  console.log("Data Recieved")

  var data = {
    username: username,
    header: header,
    message: message
  };

  data = JSON.stringify(data);

  fs.appendFile("forum.json", data, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  })

  res.redirect('back');
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});