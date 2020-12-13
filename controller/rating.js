const RatingModel = require("../model/rating");
const { resolvePagination, resolveFilterOptions } = require("../helper/utils");

module.exports = {
  async queryList(ctx) {
    const pagination = resolvePagination({ page: ctx.query.page, pageSize: ctx.query.pageSize });
    const opts = resolveFilterOptions(pagination);
    const total = await RatingModel.countDocuments();

    const data = await RatingModel.find().populate('food').sort(opts.sort).skip(opts.skip).limit(opts.limit);
    ctx.body = { data, pagination, total };
  },
  async queryAllList(ctx) {
    const opts = resolveFilterOptions();
    const data = await RatingModel.find().sort(opts.sort);
    ctx.body = data;
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;
    await RatingModel.findByIdAndDelete(id);
    ctx.status = 204;
  },
  async deleteMany(ctx) {
    const { idList } = ctx.request.body;
    await Promise.all(idList.map((id) => RatingModel.findByIdAndDelete(id)));
    ctx.status = 204;
  },
};
