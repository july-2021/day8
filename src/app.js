const express = require("express");
const app = express();

// app.get();
// app.get("/", () => {});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => console.log("Server started"));
