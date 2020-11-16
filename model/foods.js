const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const FoodsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    oldPrice: Number,
    description: String,
    sellCount: Number,
    rating: Number,
    info: String,
    menuID: ObjectId,
    image:String
  },
  {
    timestamps: true,
  } 
);

 

module.exports = mongoose.model("Foods", FoodsSchema);
