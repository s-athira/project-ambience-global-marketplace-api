const express = require("express");
const router = express.Router();
const fs = require("fs");

const CATEGORIES_FILE_PATH = "./data/categories.json";

function getCategories() {
  const fileContents = fs.readFileSync(CATEGORIES_FILE_PATH);
  return JSON.parse(fileContents);
}

router.get("/", (req, res) => {
  res.send(getCategories());
});

module.exports = router;
