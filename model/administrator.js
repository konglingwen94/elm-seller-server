const { Schema, model } = require("mongoose");

module.exports = model(
  "Administrator",
  new Schema(
    {
      username: {
        type: String,
        default: "root",
      },
      password: String,
    },
    { timestamps: true }
  )
);
