const express = require("express");
const app = express();
const materialsRoutes = require("./routes/materialsRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const cors = require("cors");

const PORT = 8080;

app.use(express.static("public"));

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/materials", materialsRoutes);

// Create a router for the root path "/"
const rootRouter = express.Router();

// Import the entire module (router and getCategories are exported as properties)
const categoriesModule = require("./routes/categoriesRoutes");

// Attach the route handling logic for GET and POST requests
rootRouter
  .route("/")
  .get((_req, res) => {
    // Handle GET requests for the root path by sending categories data
    const categoriesData = categoriesModule.getCategories();
    res.json(categoriesData);
  })
  .post((_req, res) => {
    // Handle POST requests for the root path
    res.send("Handled POST request");
  });

// Use the router for the root path
app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
