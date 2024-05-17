const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema(
  {
  title: 
  { 
    type: String, 
    required: true 
  },
  description: 
  { 
    type: String, 
    required: true 
  },
  location: 
  { 
    type: String, 
    required: true 
  },
  area: 
  { 
    type: Number, 
    required: true 
  },
  bedrooms: 
  { 
    type: Number, 
    required: true 
  },
  bathrooms: 
  { 
    type: Number, 
    required: true },
  amenities: 
  [{ 
    type: String 
  }],
  nearbyPlaces: [
    {
      type: {
        type: String,
        enum: ['hospital', 'school', 'college', 'university', 'park', 'mall'],
      },
      name: { type: String },
      distance: { type: Number },
    },
  ],
  images: [{ type: String }],
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}
);

module.exports = mongoose.model('Property', propertySchema);