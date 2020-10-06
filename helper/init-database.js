const mongoose = require("mongoose");
const FoodsModel = require("../model/foods");
const MenuModel = require("../model/menu");
const RatingModel = require("../model/rating");
const SellerModel = require("../model/seller");
const goods = require("../data/goods");
const seller = require("../data/seller").data;
let ratings = require("../data/ratings").data;
const connectDB = require("./mongoose");

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

// console.log(foods.length);

connectDB()
  .then(() => {
    return Promise.all([
      MenuModel.create(menus),
      FoodsModel.create(foods),
      RatingModel.create(ratings),
      RatingModel.create(foods.map((item) => item.ratings).flat()),
      SellerModel.create(seller),
    ]);
  })
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    process.exit(1);
  });
