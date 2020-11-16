const SellerModel=require('../model/seller')
module.exports = {
  async queryOne(ctx) {
    ctx.body= await SellerModel.findOne();
  },
};
