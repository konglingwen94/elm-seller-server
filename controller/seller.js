const SellerModel = require("../model/seller");
const FoodModel = require("../model/foods");
module.exports = {
  async queryOne(ctx) {
    const totalFoods = await FoodModel.find();

    const totalPrice = totalFoods.reduce((prev, cur) => {
      let amount = cur.price * cur.sellCount;
      amount = Number.isNaN(amount) ? 0 : amount;
      return amount + prev;
    }, 0);
     
    const totalSellCount = totalFoods.reduce((prev, cur) => {
      return prev + (cur.sellCount || 0);
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
    const { bulletin, deliveryPrice, infos, minPrice, name, pics, supports, avatar } = ctx.request.body;

    const payload = { avatar, bulletin, deliveryPrice, infos, minPrice, name, pics, supports };
    const id = ctx.params.id;
    await SellerModel.findByIdAndUpdate(id, payload);
    ctx.status = 204;
  },
};
