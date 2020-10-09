const FoodsModel = require("../model/foods");
module.exports = {
  queryList(ctx, next) {
    // try {
    var results = FoodsModel.find().exec();
    // console.log(results)
    // next(results);
    return results;
    // } catch (error) {}
    // a
    // return
  },
};
