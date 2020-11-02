const Router = require("koa-router");
const multer = require("koa-multer");

const router = new Router({ prefix: "/api" });

const FoodsController = require("../controller/foods");
const menuController = require("../controller/menu");
const ratingController = require("../controller/rating");
const sellerController = require("../controller/seller");
const middleware = require("./middleware");

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// 商品
router.delete("/foods/:id", FoodsController.deleteOne);
router.post(
  "/foods",
  middleware.verifyParams({ required: ["name", "price", "oldPrice",'image'], ruleName: "foods" }),
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

// 上传
router.post("/uploads", upload.single("file"), (ctx) => {
  // console.log(ctx.req.file, )
  if (!ctx.req.file) {
    return (ctx.body = {
      message: "请选择上传的文件",
    });
  }

  // console.log(ctx.req.file);
// debugger
  ctx.body = {
    path:`/uploads/${ctx.req.file.filename}`,
  };
});

router.delete("/uploads/:filename", (ctx) => {
  const fs = require("fs");
  const path = require("path");
  const filename = ctx.params.filename;
  if (!filename) {
    return (ctx.body = {
      message: "请添加要删除的文件名称",
    });
  }
  try {
    fs.unlinkSync(path.join(__dirname, "../public/uploads/" + filename));
  } catch (error) {
    // console.log(error);
    if (error.errno === -2) {
      ctx.status = 404;
      return (ctx.body = { message: "没有此文件" });
    }
  }

  ctx.status = 204;
});

module.exports = router;
