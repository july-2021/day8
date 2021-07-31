const express = require("express");
const app = express();

app.get("/user-list", (req, res) => {
  let list = [];
  res.json(list);
});

app.listen(4000, () => console.log("server starteddd...."));
