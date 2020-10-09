const FoodsModel = require("../model/foods");
const RatingModel = require("../model/rating");
module.exports = {
  queryList() {
    var results = FoodsModel.find();

    return results;
  },
  async queryById(ctx) {
    const { id } = ctx.params;

    var result = await FoodsModel.findById(id);
    var ratings = await RatingModel.find({ foodID: result.id });
    result = result.toObject();

    result.ratings = ratings;
    return result;
  },
  async createOne() {
    return FoodsModel.create(ctx.body);
  },
  async updateOne(ctx) {
    const { id } = ctx.params;
    const payload = ctx.body;
    return FoodsModel.findByIdAndUpdate(id, payload);
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    return FoodsModel.findByIdAndDelete(id);
  },
};
