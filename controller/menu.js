const MenuModel = require("../model/menu");
const FoodsModel = require("../model/foods");

module.exports = {
  async queryList(ctx) {
    const result = (await MenuModel.find().populate("foodsCount").sort({ createdAt: -1 })).map((item) => {
      return item.toObject({ virtuals: true });
    });

    ctx.body = result;
  },
  async createOne(ctx) {
    const payload = ctx.request.body;

    try {
      var result = await MenuModel.findOne({ name: payload.name });
    } catch (error) {
      throw error;
    }

    if (result) {
      ctx.status = 400;
      return (ctx.body = { message: "重复的名称" });
    }
    ctx.body = await MenuModel.create(payload);
  },
  async updateOne(ctx) {
    const { id } = ctx.params;
    const payload = ctx.request.body;

    ctx.body = await MenuModel.findByIdAndUpdate(id, payload);
  },
  async deleteOne(ctx) {
    const { id } = ctx.params;

    try {
      var result = await FoodsModel.findOne({ menuID: id });
    } catch (error) {}
     
    if (result) {
      ctx.status = 403;
      ctx.body = { message: "此分类下有商品" };
      return;
    }
    ctx.body = await MenuModel.findByIdAndRemove(id);
  },
};
