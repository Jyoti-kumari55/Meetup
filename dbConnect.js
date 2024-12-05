const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to the mongodb successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to Mongodb: ", error);
  });
