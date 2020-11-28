const AdministratorModel = require("../model/administrator");
const bcrypt = require("bcrypt");
const { pick } = require("../helper/utils");
module.exports = {
  async updateOne(ctx) {
    const { id } = ctx.params;
    const { oldPassword, newPassword } = ctx.request.body;

    const result = await AdministratorModel.findById(id);
    // 比较原密码是否正确
    if (!bcrypt.compareSync(oldPassword, result.password)) {
      return (ctx.body = { message: "原密码错误" });
    }
    // 加密新密码
    const hashPass = bcrypt.hashSync(newPassword, 10);
    await AdministratorModel.findByIdAndUpdate(id, { password: hashPass });
    ctx.status = 204;
  },
  async createOne(ctx) {
    const { password, username } = ctx.request.body;

    // 加密密码
    const hashPass = await bcrypt.hash(password, 10);

    const newUser = await AdministratorModel.create({ password: hashPass, username });
    // debugger
    ctx.body = pick(newUser, ["username"]);
  },
  async login(ctx) {
    const { username, password } = ctx.request.body;

    const result = await AdministratorModel.findOne({ username });

    if (!result) {
      ctx.status = 403;
      return (ctx.body = { message: "没有此用户" });
    }

    if (!bcrypt.compareSync(password, result.password)) {
      ctx.status = 403;

      return (ctx.body = { message: "错误的密码" });
    }

    ctx.body = { message: "ok" };
  },
};
