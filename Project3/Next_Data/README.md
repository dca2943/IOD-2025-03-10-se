Project 3 - Destinations API

My project 3 consists of Node.js/Express backend using MongoDB and MVC (Model-View-Controller) structure to manage travel destinations, landmarks, and cost estimates.

Requirements:
CRUD (Create, Read, Update, and Delete) API for destinations
MongoDB for local storage
MVC structure
Testing via Postman

Overview:
Node.js/Express backend->Fetches and consumes external MongoDB-hosts API data-> Stores data in MongoDB database->Exposes full CRUD endpoints via Postman

CRUD (Create, Read, Update, and Delete) endpoints via Postman
POST /api/destinations -> Create (POST) creates a new destination
GET /api/destinations-> Read (GET) gets all destinations
GET /api/destinations/:id ->Read (GET) gets a destination by ID
PUT /api/destinations/:id -> Update (PUT) updates a destination by ID
DELETE /api/destinations/:id -> Delete (DELETE) deletes a destination by ID

Project 3 folder: Next_Data/

config/: Stores configuration files that are used throughout the app.
config/db.js: MongoDB connection setup. Connects Node.js app to MongoDB using Mongoose. Reads the database URI from environment variables. Exports a function to initialize the DB connection.

controllers/:functions that handles the incoming requests, interacts with the database, and sends back responses.
controllers/destinationController.js: Handles CRUD operations logic for destinations. Each function corresponds to an endpoint (ex: createDestination handles adding a new destination).

models/: Defines structure of Destination data stored in MongoDB using Mongoose schemas.
models/Destination.js: Defines the schema for a Destination doc, including city, country, landmarks, and cost. This schema ensures data consistency and validation in the database.

routes/: Defines Express routes & Maps HTTP requests (GET, POST, PUT, DELETE) to controller functions.

routes/destinationRoutes.js: Sets up the API endpoints for destinations (ex:/api/destinations/, /api/destinations/:id).Calling the appropriate controller function based on the HTTP method and path.

.env: Keeps sensitive info. out of the source code, stores environment-specific variables, such as the server port PORT=3001 and database connection URI localhost:27017/backendDB

server.js: Application entry point to setup server, connect DB, mount routes, run app (Contains a simple root route (/))

package.json:List dependencies, packages like express, mongoose, dotenv, and scripts.
