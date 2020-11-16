const FoodsModel = require("../model/foods");
const RatingModel = require("../model/rating");
const { resolveFilterOptions, resolvePagination } = require("../helper/utils");

module.exports = {
  async queryList(ctx) {
    const { sort } = resolveFilterOptions();

    var results = await FoodsModel.find().sort(sort);

    ctx.body = results;
  },
  async queryListByOpts(ctx) {
    const { page, pageSize } = resolvePagination({ page: ctx.query.page, pageSize: ctx.query.pageSize });

    const { skip, limit, sort } = resolveFilterOptions({ page, pageSize });

    const total = await FoodsModel.countDocuments();

    var results = await FoodsModel.find().sort(sort).skip(skip).limit(limit);

    ctx.body = {
      data: results,
      total,
      pagination: {
        page,
        pageSize,
      },
    };
  },
  async queryById(ctx) {
    const { id } = ctx.params;

    var result = await FoodsModel.findById(id);

    if (result) {
      var ratings = await RatingModel.find({ foodID: result.id });
      result = result.toObject();

      result.ratings = ratings;
    }
    ctx.body = result;
  },
  async createOne(ctx,  ) {
    ctx.body = await FoodsModel.create(ctx.request.body);
  },
  async updateOne(ctx) {
    const { id } = ctx.params;
    const payload = ctx.request.body;
    ctx.body = await FoodsModel.findByIdAndUpdate(id, payload);
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    ctx.body = await FoodsModel.findByIdAndDelete(id);
  },
};
