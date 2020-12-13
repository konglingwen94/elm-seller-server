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
    image: String,
    online: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

FoodsSchema.virtual("ratings", {
  ref: "Rating",
  localField: "_id",
  foreignField: "foodID",
});
FoodsSchema.virtual("category", {
  ref: "Menu",
  localField: "menuID",
  foreignField: "_id",
  justOne: true,
});

module.exports = mongoose.model("Foods", FoodsSchema);
