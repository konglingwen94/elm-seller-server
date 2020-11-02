const MenuModel = require("../model/menu");

module.exports = {
  async queryList(ctx) {
    const result = await MenuModel.find();
    // console.log("await MenuModel.find()", result);
    ctx.body = result;
  },
  async createOne(ctx) {
    const payload = ctx.request.body;

    try {
      var result = await MenuModel.findOne({ name: payload.name });
    } catch (error) {
      throw error;
    }
    console.log("result", result);

    if (result) {
      ctx.status=400
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
    ctx.body = await MenuModel.findByIdAndRemove(id);
  },
};
