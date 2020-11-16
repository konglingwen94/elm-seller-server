const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const SellerModel = model(
  "Seller",
  new Schema(
    {
      name: String,
      description: String,
      deliveryTime: Number,
      score: Number,
      serviceScore: Number,
      foodScore: Number,
      rankRate: Number,
      minPrice: Number,
      deliveryPrice: Number,
      ratingCount: Number,
      sellCount: Number,
      bulletin: String,
      supports: [{ type: { type: Number }, description: String }],
      avatar: String,
      pics: [String],
      infos: [String],
    },
    { timestamps: true }
  )
);

module.exports = SellerModel;
