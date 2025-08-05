import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  city: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  landmarks: { type: [String], default: [] },
  costs: {
    meal: { type: Number, default: null },
    hotel: { type: Number, default: null },
  },
});

export default mongoose.model("Destination", destinationSchema);
