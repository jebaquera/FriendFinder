// Your `apiRoutes.js` file should contain two routes:
// * A GET route with the url `/api/friends`. 
//      This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`.
//      This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.

var path = require("path");
var friends = require('../data/friends.js')
module.exports = function(app){

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
  

}