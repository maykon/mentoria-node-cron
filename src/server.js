const express = require("express");

const app = express();
app.use(express.json());

let totalProjetos = 0;

app.get("/", (req, res) => {
  res.json({ totalProjetos });
});

module.exports = app;
