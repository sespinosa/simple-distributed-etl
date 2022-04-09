'use strict';

require("dotenv").config();
const express = require("express");
const nanoid = require("nanoid").nanoid;

const { PORT = 3000 } = process.env;

const app = express();

const instanceId = nanoid();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("OK");
});

app.post("/", async (req, res) => {
  try {
    res.json(req.body.map(v => `${v}-${instanceId}`));
  }
  catch(e) {
    console.error(e);
    res.status(500).json(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server (${instanceId}) listening on port ${PORT}`);
});