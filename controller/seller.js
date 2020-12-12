const SellerModel = require("../model/seller");
const FoodModel = require("../model/foods");
module.exports = {
  async queryOne(ctx) {
    const totalFoods = await FoodModel.find();

     

    const totalPrice = totalFoods.reduce((prev, cur) => {
      return cur.price * cur.sellCount + prev;
    }, 0);
    const totalSellCount = totalFoods.reduce((prev, cur) => {
      return cur.sellCount + prev;
    }, 0);

    const totalFoodCount = await FoodModel.countDocuments();

    const sellerResult = await SellerModel.findOne();

    if (!sellerResult) {
      ctx.status = 400;
      ctx.body = { message: "数据没有初始化" };
      return;
    }

    const sellerInfo = sellerResult && sellerResult.toObject();

    ctx.body = Object.assign(sellerInfo, { totalSellCount, totalPrice, totalFoodCount });
  },
  async updateOne(ctx) {
    const { bulletin, deliveryPrice, infos, minPrice, name, pics, supports } = ctx.request.body;

    const payload = { bulletin, deliveryPrice, infos, minPrice, name, pics, supports };
    const id = ctx.params.id;
    await SellerModel.findByIdAndUpdate(id, payload);
    ctx.status = 204;
  },
};
