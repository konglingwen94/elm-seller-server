const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {
    rateType: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    rateTime: {
      type: Date,
      required: true,
    },

    text: {
      type: String,
    },
    avatar: {
      type: String,
    },
    deliveryTime: {
      type: String,
    },
    score: {
      type: Number,
    },
    foodID: { type: mongoose.Types.ObjectId, ref: "Foods" },
    recommend: [String],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

RatingSchema.virtual("food", {
  ref: "Foods",
  localField: "foodID",
  foreignField: "_id",
  justOne: true,
});

module.exports = mongoose.model("Rating", RatingSchema);
