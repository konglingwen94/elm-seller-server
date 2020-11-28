const { Schema, model } = require("mongoose");

module.exports = model(
  "Administrator",
  new Schema(
    {
      username: {
        type: String,
      },
      role: {
        type: String,
        default:'ROOT'
      },
      password: String,
    },
    { timestamps: true }
  )
);
