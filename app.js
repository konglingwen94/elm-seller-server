const Koa = require("koa");
const static = require("koa-static");
const bodyparser = require("koa-bodyparser");
const connectDB = require("./helper/mongoose");
const middleware = require("./helper/middleware");
const router = require("./helper/router");

const app = new Koa();

app.use(static('./public/web'));
app.use(bodyparser());
app.use(middleware.response());
app.use(router.routes());

connectDB().then(() => {
  if (process.env.NODE_ENV !== "production") {
    console.clear();
  }
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});
