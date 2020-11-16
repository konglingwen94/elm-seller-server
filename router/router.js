const Router = require("koa-router");

const router = new Router({ prefix: "/api" });

const FoodsController = require("../controller/foods");
const menuController = require("../controller/menu");
const ratingController = require("../controller/rating");
const sellerController = require("../controller/seller");
const uploadController = require("../controller/upload");

const middleware = require("../helper/middleware");
// 商品
router.delete("/admin/foods/:id", FoodsController.deleteOne);
router.post(
  "/admin/foods",
  middleware.verifyParams({ required: ["name", "price", "oldPrice", "image"], ruleName: "foods" }),
  FoodsController.createOne
);

router.patch(
  "/admin/foods/:id",
  middleware.verifyParams({ ruleName: "foods" }),

  FoodsController.updateOne
);
router.get("/admin/foods", FoodsController.queryListByOpts);
router.get("/admin/foods/:id", FoodsController.queryById);

router.get("/foods", FoodsController.queryList);
// 商品菜单

router.post(
  "/admin/menus",

  middleware.verifyParams({ required: ["name", "type"], ruleName: "menu" }),

  menuController.createOne
);
router.get("/admin/menus", menuController.queryList);
router.delete("/admin/menus/:id", menuController.deleteOne);
router.patch(
  "/admin/menus/:id",

  menuController.updateOne
);

router.get("/menus", menuController.queryList);
// 商品评价

router.get("/ratings", ratingController.queryAllList);
router.get("/admin/ratings", ratingController.queryList);
router.delete("/admin/ratings/:id", ratingController.deleteOne);
router.post("/admin/ratings", ratingController.deleteMany);
router.get("/ratings", ratingController.queryList);
// 商家信息
router.get("/seller", sellerController.queryOne);

// 上传
router.post("/admin/uploads", uploadController.uploader.single("file"), uploadController.uploadOne);

router.delete("/admin/uploads/:filename", uploadController.deleteOne);

module.exports = router;
