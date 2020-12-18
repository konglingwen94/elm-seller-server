const Router = require("koa-router");

const router = new Router({ prefix: "/api" });

const FoodController = require("../controller/foods");
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

router.param("id", async (id, ctx, next) => {
  ctx.verifyParams({ id: { type: "string", max: 24, min: 24 } });
  await next();
});

router.get("/admin/food-statistic", FoodController.queryFoodStatistic);

router.delete(
  "/admin/foods/:id",
  middleware.adminRequired(),
  middleware.verifyPermission(),

  FoodController.deleteOne
);
router.post(
  "/admin/foods",
  middleware.adminRequired(),
  middleware.verifyParams({ required: ["name", "price", "oldPrice", "image"], ruleName: "foods" }),
  FoodController.createOne
);

router.patch(
  "/admin/foods/:id",
  middleware.adminRequired(),
  middleware.verifyPermission(),

  middleware.verifyParams({ ruleName: "foods" }),

  FoodController.updateOne
);
router.get("/admin/foods", FoodController.queryListByOpts);
router.get("/admin/foods/:id", FoodController.queryById);
router.patch("/admin/foods/:id/enable", FoodController.enableOne);
router.patch("/admin/foods/:id/disable", FoodController.disableOne);
router.get("/foods/:id", FoodController.queryById);

router.get("/foods", FoodController.queryList);
// 分类

router.post(
  "/admin/menus",
  middleware.adminRequired(),
  middleware.verifyParams({ required: ["name", "type"], ruleName: "menu" }),

  menuController.createOne
);
router.get("/admin/menus", menuController.queryList);
router.delete(
  "/admin/menus/:id",
  middleware.adminRequired(),
  middleware.verifyPermission(),
  menuController.deleteOne
);
router.patch(
  "/admin/menus/:id",
  middleware.adminRequired(),
  middleware.verifyPermission(),
  menuController.updateOne
);

router.get("/menus", menuController.queryList);
// 商品评价

router.get("/ratings", ratingController.queryAllList);
router.get("/admin/ratings", ratingController.queryList);
router.delete(
  "/admin/ratings/:id",
  middleware.adminRequired(),
  middleware.verifyPermission(),

  ratingController.deleteOne
);
router.post("/admin/ratings", middleware.adminRequired(), ratingController.deleteMany);
router.get("/ratings", ratingController.queryList);
// 商家信息
router.get("/seller", sellerController.queryOne);
router.get("/admin/seller", sellerController.queryOne);
router.patch(
  "/admin/seller/:id",
  middleware.adminRequired(),
  middleware.verifyParams({ ruleName: "seller" }),
  middleware.verifyPermission(),

  sellerController.updateOne
);

// 上传
router.post(
  "/admin/uploads",

  uploadController.uploader.single("file"),
  uploadController.uploadOne
);

router.delete(
  "/admin/uploads/:filename",
  middleware.adminRequired(),

  uploadController.deleteOne
);

// 管理员

router.post(
  "/admin/administrators/login",
  middleware.verifyParams({
    ruleName: "administrator",
    required: ["username", "password"],
    validateFields: ["username", "password"],
  }),
  administratorController.login
);

router.patch(
  "/admin/administrators/:id/change-account",
  middleware.adminRequired(),
  middleware.verifyPermission(),
  middleware.verifyParams({
    ruleName: "administrator",
    required: ["username"],
    validateFields: ["username"],
  }),
  administratorController.updateAccount
);

router.patch(
  "/admin/administrators/:id/change-password",
  middleware.adminRequired(),
  middleware.verifyPermission(),

  middleware.verifyParams({
    ruleName: "administrator",
    required: ["oldPassword", "newPassword"],
    validateFileds: ["oldPassword", "newPassword"],
  }),
  administratorController.changePassword
);

router.get("/admin/administrators", middleware.adminRequired(), administratorController.queryList);

module.exports = router;
