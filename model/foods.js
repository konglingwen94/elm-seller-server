const mongoose = require("mongoose");
const { ObjectId } = mongoose;
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
  },
  {
    timestamps: true,
  } 
);

FoodsSchema.pre("save", (next) => {
  if (!this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model("Foods", FoodsSchema);
