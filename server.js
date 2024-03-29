// importing packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// router
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const paymentRoute = require("./routes/paymentRoute");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/payment", paymentRoute);

app.use("/public/uploads", express.static("public/uploads"));

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
