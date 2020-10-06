const express = require("express");
const connectDB = require("./helper/mongoose");
const app = express();

const router = require("./helper/router");

app.use('/api',router)

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
  });
});
