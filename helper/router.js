const Router = require("koa-router");
const router = new Router({ prefix: "/api" });

const FoodsController = require("../controller/foods");
const menuController = require("../controller/menu");
const ratingController = require("../controller/rating");
const sellerController = require("../controller/seller");
const middleware = require("./middleware");

// 商品
router.delete("/foods/:id", FoodsController.deleteOne);
router.post(
  "/foods",
  middleware.verifyParams({ required: ["name", "price", "oldPrice"], ruleName: "foods" }),
  FoodsController.createOne
);

router.patch(
  "/foods/:id",
  middleware.verifyParams({ ruleName: "foods" }),

  FoodsController.updateOne
);
router.get("/foods", FoodsController.queryList);
router.get("/foods/:id", FoodsController.queryById);

// 商品菜单

router.post(
  "/menus",

  middleware.verifyParams({ required: ["name", "type"], ruleName: "menu" }),

  menuController.createOne
);
router.get("/menus", menuController.queryList);
router.delete("/menus/:id", menuController.deleteOne);
router.patch(
  "/menus/:id",

  menuController.updateOne
);

// 商品评价

router.delete("/ratings/:id", ratingController.deleteOne);
router.get("/ratings", ratingController.queryList);

router.get("/seller", sellerController.queryOne);

module.exports = router;
