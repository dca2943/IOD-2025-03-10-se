import Destination from "../models/itinerary.js";

//Create (POST) a new destination
export const createDestination = async (req, res) => {
  try {
    const { city, country, landmarks, costs } = req.body;
    if (!city || !country) {
      return res
        .status(400)
        .json({ message: "City and country are required." });
    }

    const destination = new Destination({
      city,
      country,
      landmarks: landmarks || [],
      costs: costs || {},
    });

    await destination.save();
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read (GET) get all destinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read (GET) get a destination by ID
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: "Not found" });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update (PUT) update a destination by ID
export const updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete (DELETE) a destination by ID
export const deleteDestination = async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Destination deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
