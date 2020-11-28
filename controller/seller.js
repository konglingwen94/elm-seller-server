const SellerModel = require("../model/seller");
// const defaults = require("../helper/utils").defaults;
module.exports = {
  async queryOne(ctx) {
    ctx.body = await SellerModel.findOne();
  },
};
