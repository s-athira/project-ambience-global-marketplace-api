const express = require("express");
const app = express();
const materialsRoutes = require("./routes/materialsRoutes");

const PORT = 8080;

app.use("/materials", materialsRoutes);

//to test get request to localhost:8080

app.get("/", (_req, res) => {
  console.log("Welcome to my server!!");
  res.send("Yay, it worked!!!");
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
