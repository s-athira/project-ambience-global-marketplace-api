const express = require("express");
const app = express();
const materialsRoutes = require("./routes/materialsRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");

const PORT = 8080;

app.use(express.static("public"));

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/materials", materialsRoutes);

//to test get request to localhost:8080

app.get("/", (_req, res) => {
  res.send("Yay, it worked!!!");
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
