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

    const totalFoodCount=await FoodModel.countDocuments()
    // debugger;
    const sellerInfo = (await SellerModel.findOne()).toObject();
    ctx.body = Object.assign(sellerInfo, { totalSellCount, totalPrice ,totalFoodCount});
  },
};
