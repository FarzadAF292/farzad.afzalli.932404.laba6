const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Lab 6 server is working");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
