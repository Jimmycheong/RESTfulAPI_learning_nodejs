// Requires
const express = require('express');

// Set up app
const app = express();

//Request handlers
app.get('/api', function(req, res){
  console.log('GET request');
  res.send({name:'Yoshi'})
})

//Listen to requests
app.listen( process.env.port || 4000, function(){
  console.log("Server booted up. Listening for requests\n");
});
