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

MenuSchema.pre("save", (next) => {
  if (!this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports =  mongoose.model("Menu", MenuSchema);
