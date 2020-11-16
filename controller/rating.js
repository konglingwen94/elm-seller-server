const RatingModel = require("../model/rating");
const { resolvePagination, resolveFilterOptions } = require("../helper/utils");

module.exports = {
  async queryList(ctx) {
    const pagination = resolvePagination({ page: ctx.query.page, pageSize: ctx.query.pageSize });
    const opts = resolveFilterOptions(pagination);
    const total = await RatingModel.countDocuments();

    const data = await RatingModel.find().sort(opts.sort).skip(opts.skip).limit(opts.limit);
    // debugger;
    ctx.body = { data, pagination, total };
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    await RatingModel.findByIdAndDelete(id);
    ctx.status = 204;
  },
};
