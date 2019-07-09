var friends = require('../data/friends.js');

module.exports = function(app){
    // get api/friends route
    app.get('/api/friends', function(req, res) {
        return res.json(friends);
    });
   
    // post api/friends route
    app.post('/api/friends', function(req, res) {
        friends.push(req.body);
    });
};

// // Displays a single friend, or returns false
    // app.get("/api/friends/:friend", function(req, res) {
    //     var chosen = req.params.friend;
  
    //     for (var i = 0; i < friends.length; i++) {
    //         if (chosen === friends[i].routeName) {
    //         return res.json(friends[i]);
    //         }
    //     }
    // return res.json(false);
    // });
  