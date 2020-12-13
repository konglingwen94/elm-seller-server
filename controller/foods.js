const FoodsModel = require("../model/foods");
const RatingModel = require("../model/rating");
const { defaults, resolveFilterOptions, resolvePagination } = require("../helper/utils");

module.exports = {
  async queryFoodStatistic(ctx) {
    const defaultOpt = { sort: "sale", count: 10 };
    let opt = defaults({}, ctx.query, defaultOpt);

    opt = resolveFilterOptions({ pageSize: opt.count, sort: { [opt.sort]: -1 } });

    const result = await FoodsModel.find().populate('ratings').sort(opt.sort).skip(opt.skip).limit(opt.limit);
    
    
    ctx.body = result.map((item) => {
      return {
        name: item.name,
        sellCount: item.sellCount,

        ratingCount: item.rating,
        highRating: parseFloat((item.ratings.filter(item=>item.rateType===0).length/item.ratings.length).toFixed(2)),
      };
    });
  },
  async queryList(ctx) {
    const { sort } = resolveFilterOptions();

    var results = await FoodsModel.find().sort(sort);

    ctx.body = results;
  },
  async queryListByOpts(ctx) {
    const { page, pageSize } = resolvePagination({ page: ctx.query.page, pageSize: ctx.query.pageSize });

    const { skip, limit, sort } = resolveFilterOptions({ page, pageSize });

    const total = await FoodsModel.countDocuments();

    var results = await FoodsModel.find().populate('category').sort(sort).skip(skip).limit(limit);

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
  async createOne(ctx) {
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
