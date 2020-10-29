const data = require("../data/seller.json");

module.exports = {
  queryOne(ctx) {
    ctx.body= data.data;
  },
};
