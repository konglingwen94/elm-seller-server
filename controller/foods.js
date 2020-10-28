const FoodsModel = require("../model/foods");
const RatingModel = require("../model/rating");
// const validateRules = require("../helper/validatorRules").foods;

 
module.exports = {
  async queryList(ctx) {
    var results =await FoodsModel.find();
     

    ctx.body= results;
  },
  async queryById(ctx) {
    const { id } = ctx.params;

    var result = await FoodsModel.findById(id);
    var ratings = await RatingModel.find({ foodID: result.id });
    result = result.toObject();

    result.ratings = ratings;
    ctx.body= result;
  },
  async createOne(ctx,next) {
     
  //  abc
    ctx.body= await FoodsModel.create(ctx.request.body);
  },
  async updateOne(ctx) {
    const { id } = ctx.params;
    const payload = ctx.request.body;
    ctx.body= await FoodsModel.findByIdAndUpdate(id, payload);
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    ctx.body= await FoodsModel.findByIdAndDelete(id);
  },
};
