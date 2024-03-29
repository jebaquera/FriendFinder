// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});


// HTML and API Routes
// =============================================================
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

