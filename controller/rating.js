const RatingModel = require("../model/rating");

module.exports = {
  async queryList(ctx) {
    ctx.body=await RatingModel.find();
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    ctx.body=await RatingModel.findByIdAndDelete(id);
  },
};
