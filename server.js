// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Friends (DATA) see friends.js
// =============================================================
var friends = [
  {
    "name": "Ahmed",
    "photo": "https://unsplash.com/photos/5OjfCQduO9E",
    "scores": [
        5, 
        1, 
        2, 
        4, 
        5, 
        2, 
        3, 
        3, 
        1, 
        1
      ]
  },
  {
    "name": "Jacob",
    "photo": "#https://unsplash.com/photos/vMV6r4VRhJ8",
    "scores": [
        3, 
        4, 
        5, 
        3, 
        2, 
        2, 
        3, 
        4, 
        5, 
        3
      ]
  },
  {
    "name": "Laura",
    "photo": "https://unsplash.com/photos/WwOZfNO08_M",
    "scores": [
        2, 
        2, 
        4, 
        1, 
        3, 
        1, 
        3, 
        4, 
        4, 
        1
      ]
  },
  {
    "name": "Louis",
    "photo": "https://unsplash.com/photos/41Is0o6JMBk",
    "scores": [
        1, 
        5, 
        5, 
        4, 
        1, 
        3, 
        2, 
        3, 
        2, 
        2
      ]
  },

  {
    "name": "Lou",
    "photo": "https://unsplash.com/photos/_lbW_JZwUCM",
    "scores": [
        4, 
        3, 
        2, 
        3, 
        4, 
        4, 
        5, 
        1, 
        1, 
        3
      ]
  },
  {
    "name": "Jordan",
    "photo": "https://unsplash.com/photos/ySTdW42Y7og",
    "scores": [
        3, 
        2, 
        4, 
        2, 
        2, 
        5, 
        5, 
        5, 
        4, 
        4
      ]
  },
  {
    "name": "Joren",
    "photo": "https://unsplash.com/photos/5FlYmHYLf_8",
    "scores": [
        2, 
        4, 
        3, 
        5, 
        3, 
        1, 
        4, 
        2, 
        5, 
        5
      ]
  }
];

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/survey"));
});

// Displays all friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Displays a single friend, or returns false
app.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friend;

  console.log(chosen);

  for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].routeName) {
      return res.json(friends[i]);
    }
  }
  return res.json(false);
});


// Add Friends that take the survey - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


