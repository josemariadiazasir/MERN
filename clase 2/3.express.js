const express = require("express");
const dittoJSON = require("./pokemon/ditto.json");

const app = express();
const port = 3000;

app.disable("x-powered-by");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>mi página</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.json(dittoJSON);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
