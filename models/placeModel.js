const mongoose = require('mongoose');
const validator = require('validator');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'placename is required'],
  },
  type: {
    type: String,
    required: [true, 'place type is required'],
  },
  idealFor: {
    type: String,
  },
  address: {
    city: String,
    state: String,
    addressline: String,
    landmark: String,
  },
  location: {
    lat: Number,
    lon: Number,
  },
  preferredTime: {
    type: String,
  },
  accommodation: {
    type: String,
  },
  fooding: {
    type: String,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  addedOn: Date,
});

module.exports = mongoose.model('Place', placeSchema);
