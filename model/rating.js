const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    rateTime: {
      type: Date,
      required: true,
    },
    rateType: {
      type: Number,
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
    recommend: [String],
  },
  {
    timestamps: true,
  }
);

RatingSchema.pre("save", (next) => {
  if (!this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports =  mongoose.model("Rating", RatingSchema);
