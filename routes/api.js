const express = require('express')
const router = express.Router();
const Ninja = require('../models/ninjas')


// Get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){

  Ninja.geoNear(
    {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    {maxDistance: 100000, spherical: true}
  ).then(function(ninjas){
    res.send(ninjas);
  });

});

// Add new ninja in db
router.post('/ninjas', function(req, res,next){
  Ninja.create(req.body).then(function(data){
    res.send(data);
  }).catch(next);

});

// Update ninja in db
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
    Ninja.findOne({_id : req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  });
});

// Remove a ninja from db
router.delete('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndRemove({_id : req.params.id}).then(function(ninja){
    res.send(ninja);
  });
});

// Export module
module.exports = router;
