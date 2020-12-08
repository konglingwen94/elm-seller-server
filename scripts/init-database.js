const mongoose = require("mongoose");
const FoodsModel = require("../model/foods");
const MenuModel = require("../model/menu");
const RatingModel = require("../model/rating");
const SellerModel = require("../model/seller");
const goods = require("../data/goods");
const seller = require("../data/seller").data;
let ratings = require("../data/ratings").data;
const connectDB = require("../helper/mongoose");

if (typeof Array.prototype.flat !== "function") {
  Array.prototype.flat = function _flat() {
    let newArr = [];

    this.forEach((item) => {
      if (Array.isArray(item)) {
        newArr = newArr.concat(item.flat());
      } else {
        newArr.push(item);
      }
    });
    return newArr;
  };
}

ratings = ratings.map((item) => {
  return {
    ...item,
    _id: mongoose.Types.ObjectId(),
  };
});

const menus = goods.data.map((item) => {
  const ObjectID = mongoose.Types.ObjectId();

  item.foods.forEach((item) => {
    item.menuID = ObjectID;
    item._id = mongoose.Types.ObjectId();
    item.ratings.forEach((ratingItem) => {
      ratingItem.foodID = item._id;
      ratingItem._id = mongoose.Types.ObjectId();
    });
  });

  return {
    name: item.name,
    type: item.type,
    _id: ObjectID,
  };
});
const foods = goods.data
  .map((item) => {
    return item.foods;
  })
  .flat();

const [NODE_ENV] = process.argv.slice(2);

connectDB(NODE_ENV)
  .then(() => {
    return Promise.all([
      MenuModel.create(menus),
      FoodsModel.create(foods),
      RatingModel.create(ratings),
      RatingModel.create(foods.map((item) => item.ratings).flat()),
      SellerModel.create(seller),
    ]);
  })
  .then((data) => {
    console.log(`成功初始化 ${data.flat(3).length}条数据`);
    process.exit(0);
  })
  .catch((err) => {
    process.exit(1);
  });
