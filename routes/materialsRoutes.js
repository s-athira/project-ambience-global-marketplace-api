const express = require("express");
const router = express.Router();
const fs = require("fs");

const MATERIALS_FILE_PATH = "./data/materials.json";

function getMaterials() {
  const fileContents = fs.readFileSync(MATERIALS_FILE_PATH);
  return JSON.parse(fileContents);
}

router.get("/", (req, res) => {
  res.send(getMaterials());
});

module.exports = router;
