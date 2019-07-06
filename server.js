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


// Friends (DATA)
// =============================================================
var friends = [
  {
    "routeName": "ahmed",
    "name": "Ahmed",
    "photo": "#",
    "scores": ["5", "1", "2", "4", "5", "2", "3", "3", "1", "1"]
  },
  {
    "routeName": "jacob",
    "name": "Jacob",
    "photo": "#",
    "scores": ["3", "4", "5", "3", "2", "2", "3", "4", "5", "3"]
  },
  {
    "routeName": "jeremiah",
    "name": "Jeremiah",
    "photo": "#",
    "scores": ["2", "2", "4", "1", "3", "1", "3", "4", "4", "1"]
  },
  {
    "routeName": "louis",
    "name": "Louis",
    "photo": "#",
    "scores": ["1", "5", "5", "4", "1", "3", "2", "3", "2", "2"]
  },
  {
    "routeName": "lou",
    "name": "Lou",
    "photo": "#",
    "scores": ["4", "3", "2", "3", "4", "4", "5", "1", "1", "3"]
  },
  {
    "routeName": "jordan",
    "name": "Jordan",
    "photo": "#",
    "scores": ["3", "2", "4", "2", "2", "5", "5", "5", "4", "4"]
  },
  {
    "routeName": "ben",
    "name": "Ben",
    "photo": "#",
    "scores": ["2", "4", "3", "5", "3", "1", "4", "2", "5", "5"]
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


