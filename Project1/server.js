const express = require("express"); // Importing Express
const cors = require("cors"); // Importing CORS
const fs = require("fs"); // Importing File System
// This code sets up a simple Express server that serves user data from a JSON file.

const app = express(); // Creating an Express application
// This is the main entry point of the server application.
app.use(cors()); // Enable CORS for all routes
// This allows the server to accept requests from different origins, which is useful for development and API consumption.
app.use(express.json()); // Middleware to parse JSON request bodies
// This middleware is used to parse incoming JSON requests and make the data available in req.body.

app.get("/api/users", (req, res) => {
  // Endpoint to get user data
  // This endpoint handles GET requests to fetch user data.
  fs.readFile("users.json", "utf8", (err, data) => {
    // This reads the users.json file
    if (err) return res.status(500).send("Error loading users"); // Error handling
    // If there is an error reading the file, send a 500 status code with an error message.
    res.json(JSON.parse(data)); // Parse the JSON data and send it as a response
    // If the file is read successfully, parse the JSON data and send it as a response.
  }); // This is the main entry point of the server application.
});

app.listen(3000, () => console.log("Server running at http://localhost:3000")); // Start the server on port 3000
// This starts the server and listens for incoming requests on port 3000.
// This is the main entry point of the server application.
//Using a Backend Server
// This code sets up a simple Express server that serves user data from a JSON file.
