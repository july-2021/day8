const express = require("express");
const app = express();

// http://localhost:4000/
app.get("/", (req, res) => {
  res.send("Hello World");
});

// http://localhost:4000/1
app.get("/1", (req, res) => {
  let ref = { id: 1, name: "rahul" };
  res.json(ref);
});

// http://localhost:4000/2
app.get("/2", (req, res) => {
  let list = ["delhi", "calcutta", "mumbai"];
  res.json(list);
});

// http://localhost:4000/3
app.get("/3", (req, res) => {
  let list = [
    { id: 1, name: "rahul", email: "rahul@gmail.com", mobile: "2323233" },
    { id: 2, name: "rohit", email: "rohit@gmail.com", mobile: "23232323" },
    { id: 1, name: "rahul", email: "rahul@gmail.com", mobile: "2323233" },
    { id: 2, name: "rohit", email: "rohit@gmail.com", mobile: "23232323" },
    { id: 1, name: "rahul", email: "rahul@gmail.com", mobile: "2323233" },
    { id: 2, name: "rohit", email: "rohit@gmail.com", mobile: "23232323" },
  ];

  res.json(list);
});

app.listen(4000, () => console.log("Server started"));
