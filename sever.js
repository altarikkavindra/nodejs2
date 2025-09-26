const express = require("express");
const app = express();
const port = 4000;

// Route utama
app.get("/", (req, res) => {
  res.send("Hello World from Node.js Level 2!");
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
