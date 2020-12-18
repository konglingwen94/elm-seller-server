const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdministratorModel = require("../model/administrator");
const { omit, } = require("../helper/utils");
const { secretKey, expiresIn } = require("../config/config.default.json");

module.exports = {
  async queryList(ctx) {
    const level = ctx.state.adminInfo.level;
    payload = { level: { $lte: level } };
    ctx.body = await AdministratorModel.find(payload);
  },
  async changePassword(ctx) {
    const { id } = ctx.params;
    const { oldPassword, newPassword } = ctx.request.body;

    const result = await AdministratorModel.findById(id);
    // 比较原密码是否正确

    if (!bcrypt.compareSync(oldPassword, result.password)) {
      ctx.status = 400;
      return (ctx.body = { message: "原密码错误" });
    }
    // 加密新密码
    const hashPass = bcrypt.hashSync(newPassword, 10);
    await AdministratorModel.findByIdAndUpdate(id, { password: hashPass });
    ctx.status = 204;
  },

  async updateAccount(ctx) {
    const { id } = ctx.params;
    const { username } = ctx.request.body;
    await AdministratorModel.findByIdAndUpdate(id, { username });

    ctx.status = 204;
  },
  async login(ctx) {
    const { username, password } = ctx.request.body;

    let result = await AdministratorModel.findOne({ username });
    //如果没有结果则 创建新用户
    if (!result) {
      // 加密密码
      const hashPass = await bcrypt.hash(password, 10);

      const newUser = await AdministratorModel.create({ password: hashPass, username });

      const token = jwt.sign({ username, role: newUser.role, level: newUser.level }, secretKey, {
        expiresIn,
      });

      return (ctx.body = { admin: omit(newUser.toObject(), ["password"]), token });
    }

    if (!bcrypt.compareSync(password, result.password)) {
      ctx.status = 400;

      return (ctx.body = { message: "用户名或密码错误" });
    }
    const user = result.toObject();
    const token = jwt.sign(user, secretKey, { expiresIn });
     
    ctx.body = { admin: omit(user, ["password"]), token };
  },
};
