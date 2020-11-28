const Router = require("koa-router");

const router = new Router({ prefix: "/api" });

const FoodsController = require("../controller/foods");
const menuController = require("../controller/menu");
const ratingController = require("../controller/rating");
const sellerController = require("../controller/seller");
const uploadController = require("../controller/upload");
const administratorController = require("../controller/administrator");

const middleware = require("../helper/middleware");
/*
 商品
*/
// 统计
router.get("/admin/food-statistic", FoodsController.queryFoodStatistic);

router.delete("/admin/foods/:id", middleware.adminRequired(), FoodsController.deleteOne);
router.post(
  "/admin/foods",
  middleware.adminRequired(),
  middleware.verifyParams({ required: ["name", "price", "oldPrice", "image"], ruleName: "foods" }),
  FoodsController.createOne
);

router.patch(
  "/admin/foods/:id",
  middleware.adminRequired(),
  middleware.verifyParams({ ruleName: "foods" }),

  FoodsController.updateOne
);
router.get("/admin/foods", FoodsController.queryListByOpts);
router.get("/admin/foods/:id", FoodsController.queryById);
router.get("/foods/:id", FoodsController.queryById);

router.get("/foods", FoodsController.queryList);
// 分类

router.post(
  "/admin/menus",
  middleware.adminRequired(),
  middleware.verifyParams({ required: ["name", "type"], ruleName: "menu" }),

  menuController.createOne
);
router.get("/admin/menus", menuController.queryList);
router.delete("/admin/menus/:id", middleware.adminRequired(), menuController.deleteOne);
router.patch("/admin/menus/:id", middleware.adminRequired(), menuController.updateOne);

router.get("/menus", menuController.queryList);
// 商品评价

router.get("/ratings", ratingController.queryAllList);
router.get("/admin/ratings", ratingController.queryList);
router.delete("/admin/ratings/:id", middleware.adminRequired(), ratingController.deleteOne);
router.post("/admin/ratings", middleware.adminRequired(), ratingController.deleteMany);
router.get("/ratings", ratingController.queryList);
// 商家信息
router.get("/seller", sellerController.queryOne);
router.get("/admin/seller", sellerController.queryOne);

// 上传
router.post(
  "/admin/uploads",
  middleware.adminRequired(),
  uploadController.uploader.single("file"),
  uploadController.uploadOne
);

router.delete("/admin/uploads/:filename", middleware.adminRequired(), uploadController.deleteOne);

// 管理员

router.post("/admin/administrators/login", administratorController.login);
router.post("/admin/administrators", middleware.adminRequired(), administratorController.createAccount);
router.patch("/admin/administrators/:id/change-password", middleware.adminRequired(), administratorController.changePassword);
 

module.exports = router;
