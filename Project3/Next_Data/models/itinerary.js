import mongoose from "mongoose";

// schema
const itinerarySchema = new mongoose.Schema({
  city: String,
  country: String,
  landmarks: [String],
  costs: {
    meal: Number,
    hotel: Number,
  },
});

//  model using itinerarySchema
const itinerary = mongoose.model("itinerary", itinerarySchema);

export default itinerary;
