const RatingModel = require("../model/rating");

module.exports = {
  queryList() {
    return RatingModel.find();
  },
  deleteOne(ctx) {
    const { id } = ctx.params;
    return RatingModel.findByIdAndDelete(id);
  },
};
