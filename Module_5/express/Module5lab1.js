const express = require("express");

// Create first server on port 3000
const app1 = express();
const port1 = 4000;

app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.listen(port1, () => {
  console.log(`Server 1 listening at http://localhost:${port1}`);
});

// Create second server on port 4000
const app2 = express();
const port2 = 5000;

app2.get("/", (req, res) => {
  res.send("Hello from NYC!");
});

app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});

//script initializes two separate Express applications running on ports 3000 and 4000, each responds with a unique message.
