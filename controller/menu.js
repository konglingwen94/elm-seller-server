const MenuModel = require("../model/menu");

module.exports = {
  async queryList(ctx) {
    const result = await MenuModel.find();
    console.log("await MenuModel.find()", result);
    ctx.body = result;
  },
  createOne(ctx) {
    const payload = ctx.body;
    return MenuModel.create(payload);
  },
  updateOne(ctx) {
    const { id } = ctx.params;
    const payload = ctx.body;
    return MenuModel.findByIdAndUpdate(id, payload);
  },
  deleteOne(ctx) {
    const { id } = ctx.params;
    return MenuModel.findByIdAndRemove(id);
  },
};
