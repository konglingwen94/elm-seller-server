const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

MenuSchema.virtual('foodsCount',{
  ref: 'Foods', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'menuID', // is equal to `foreignField`
  count: true,
})



module.exports =  mongoose.model("Menu", MenuSchema);
