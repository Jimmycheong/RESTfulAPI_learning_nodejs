const express = require('express')
const router = express.Router();

// Get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({type: 'GET'})
});

// Add new ninja in db
router.post('/ninjas', function(req, res){
  res.send({type: 'POST'})

});

// Update ninja in db
router.put('/ninjas/:id', function(req, res){
  res.send({type: 'GET'})
});

// Remove a ninja from db
router.delete('/ninjas/:id', function(req, res){
  res.send({type: 'GET'})
});
