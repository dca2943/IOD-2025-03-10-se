const express = require("express");
const router = express.Router();
// Get request to /pets
router.get("/pets", (req, res) => {
  res.send("Hello World, this is a pet route");
});

module.exports = router;
