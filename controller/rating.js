const RatingModel = require("../model/rating");

module.exports = {
  async queryList(ctx) {
    ctx.body=await RatingModel.find();
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    await RatingModel.findByIdAndDelete(id);
    ctx.status=204
  },
};
