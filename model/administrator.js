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
        default:'JUNIOR'
      },
      level:{
        type:Number,
        default:1
      },
      password: String,
    },
    { timestamps: true }
  )
);
