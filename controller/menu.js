const MenuModel = require("../model/menu");

module.exports = {
  queryList() {
    return MenuModel.find();
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
