const Router = require("koa-router");
const router = new Router({ prefix: "/api" });

const FoodsController = require("../controller/foods");
const menuController = require("../controller/menu");
const ratingController = require("../controller/rating");
const sellerController = require("../controller/seller");
const middleware = require("./middleware");

router.use(middleware.verifyParams())


router.delete("/foods", FoodsController.deleteOne);
router.post('foods',"/foods", FoodsController.createOne);
router.post("/foods/:id", FoodsController.updateOne);
router.get("/foods", FoodsController.queryList);
router.get("/foods/:id", FoodsController.queryById);

router.post("/menus", menuController.createOne);
router.get("/menus", menuController.queryList);
router.delete("/menus/:id", menuController.deleteOne);
router.post("/menus/:id", menuController.updateOne);

router.delete("/ratings/:id", ratingController.deleteOne);
router.get("/ratings", ratingController.queryList);

router.get("/seller", sellerController.queryOne);


module.exports = router;
