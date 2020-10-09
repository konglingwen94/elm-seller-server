const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const connectDB = require("./helper/mongoose");
const middleware = require("./helper/middleware");
const router = require("./helper/router");

 

const app = new Koa();


 

app.use(bodyparser());
app.use(middleware.response());
app.use( router.routes());

connectDB().then(() => {
  if (process.env.NODE_ENV !== "production") {
    console.clear();
  }
  app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
  });
});
