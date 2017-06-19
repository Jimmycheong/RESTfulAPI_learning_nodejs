// Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Set up app
const app = express();

// Serve static files
app.use(express.static('public'));

app.use(bodyParser.json());

//Initialise routes
app.use('/api', routes);

// Error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
});

//Listen to requests
app.listen( process.env.port || 4000, function(){
  console.log("Server booted up. Listening for requests\n");
});
