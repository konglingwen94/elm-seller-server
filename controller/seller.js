const SellerModel = require("../model/seller");
const FoodModel = require("../model/foods");
module.exports = {
  async queryOne(ctx) {
    const totalFoods = await FoodModel.find();

    if (!totalFoods) {
      ctx.status = 400;
      return (ctx.body = { message: "没有商铺信息" });
    }

    const totalPrice = totalFoods.reduce((prev, cur) => {
      return cur.price * cur.sellCount + prev;
    }, 0);
    const totalSellCount = totalFoods.reduce((prev, cur) => {
      return cur.sellCount + prev;
    }, 0);

    const totalFoodCount = await FoodModel.countDocuments();

    const sellerInfo = (await SellerModel.findOne()).toObject();
    ctx.body = Object.assign(sellerInfo, { totalSellCount, totalPrice, totalFoodCount });
  },
  async updateOne(ctx) {
    const { bulletin, deliveryPrice, infos, minPrice, name, pics, supports } = ctx.request.body;

    const payload = { bulletin, deliveryPrice, infos, minPrice, name, pics, supports };
    const id=ctx.params.id
    await SellerModel.findByIdAndUpdate(id, payload);
    ctx.status=204
  },
};
