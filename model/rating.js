const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {


    rateType: {
      type: Number,
      required: true,
      enum:[0,1]    // 0 是好评 ，1是差评
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
    foodID: { type: mongoose.Types.ObjectId, ref: "Food" },
    recommend: [String],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

RatingSchema.virtual("food", {
  ref: "Food",
  localField: "foodID",
  foreignField: "_id",
  justOne: true,
});

module.exports = mongoose.model("Rating", RatingSchema);
