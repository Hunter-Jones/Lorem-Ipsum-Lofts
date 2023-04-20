const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs")
app.use(express.json());       
app.use(express.urlencoded({extended: true}));

app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'public')));


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

app.get("/log-in", (req, res) => {
  res.sendFile(__dirname + "/views/log-in.html");
});
app.get("/log-in.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/log-in.css"));
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
app.get("/resident-links/forum.json", (req, res) => {
  res.sendFile(__dirname + "/forum.json");
});

app.get("/resident-links/rent", (req, res) => {
  res.sendFile(__dirname + "/views/rent.html");
});
app.get("/resident-links/building-requests", (req, res) => {
  res.sendFile(__dirname + "/views/building-requests.html");
});


app.post("/resident-links/forum/", (req, res) => {
  const username_ = req.body.username;
  const header_ = req.body.header;
  const message_ = req.body.message
  // res.send("Data received");
  console.log("Username: " + username_);
  console.log("Password: " + header_);
  console.log("Meessage: " + message_);
  console.log("Data Recieved")

var forumPost = {
  username: username_, 
  header: header_, 
  message: message_
  };

fs.readFile('forum.json', function (err, data) {
    var json = JSON.parse(data)
    json.forum.push(forumPost)
    fs.writeFileSync("forum.json", JSON.stringify(json))
})

  res.redirect('back');
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});