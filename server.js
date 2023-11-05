require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/product", productRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the db & listening on port " + process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });