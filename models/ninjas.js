const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create geolocation Schema

const GeoSchema = new Schema({
  type : {
    type: String,
    default: "Point",
  },
  coordinates : {
    type: [Number],
    index: "2dsphere"
  }
});

// Create ninja Schema and Model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
    },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
// Add in Geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
