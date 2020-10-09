const Router = require("koa-router");
const router = new Router({prefix:'/api'});

const FoodsController = require("../controller/foods");
 

router.get("/foods", FoodsController.queryList);

module.exports = router;
