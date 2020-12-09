const Koa = require("koa");
const static = require("koa-static");
const compress = require('koa-compress')
const mount = require("koa-mount");
const bodyparser = require("koa-bodyparser");
const { historyApiFallback } = require("koa2-connect-history-api-fallback");
const connectDB = require("./helper/mongoose");
const middleware = require("./helper/middleware");
const router = require("./router/router");

const parameter = require("koa-parameter");

const app = new Koa();
const PORT = process.env.PORT || 5000;

app.use(compress({}));
app.use(static("./public/web"));
// 处理vue-router使用history模式返回index.html

app.use(historyApiFallback({ index: "/admin/index.html", whiteList: ["/api"] }));

app.use(mount("/uploads", static("./public/uploads")));
app.use(mount("/admin", static("./public/admin")));
app.use(bodyparser());
app.use(parameter(app)); // also add a middleware to catch the error.

app.use(middleware.errorHandler());
app.use(router.routes());
app.use(router.allowedMethods());

connectDB( ).then(() => {
  if (process.env.NODE_ENV !== "production") {
    // console.clear();
  }
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});
