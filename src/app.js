const express = require("express");
const app = express();

// http://localhost:4000/user-create
app.post("/user-create", (req, res) => {
  res.json({ message: "User created Successfully" });
});

app.listen(4000, () => console.log("server starteddd...."));
