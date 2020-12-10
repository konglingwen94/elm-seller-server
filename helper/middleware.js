const jwt = require("jsonwebtoken");
const validateRules = require("./validatorRules.js");
const { secretKey } = require("../config/config.default.json");
const { pick,copy } = require("../helper/utils");
module.exports = {
  verifyParams(opts = {}) {
    const { ruleName, required, validateFields } = opts;

    if (!validateRules.hasOwnProperty(ruleName)) {
      throw new Error(`Not Found ruleName ${ruleName}`);
    }

    let rules = copy(validateRules[ruleName]);

    if (Array.isArray(validateFields)) {
      rules = pick(rules, validateFields);
    }

    if (Array.isArray(required)) {
      required.forEach((key) => {
        if (rules.hasOwnProperty(key)) {
          rules[key].required = true;
        }
      });
    }

    return (ctx, next) => {
      if (!rules) return next();

      ctx.verifyParams(rules);
      return next();
    };
  },

  errorHandler() {
    return async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        ctx.status = error.status || 500;
        // console.dir(error);
        const response = Object.assign(
          {
            message:
              ctx.status === 500 && process.env.NODE_ENV === "production"
                ? "Internal server Error"
                : error.message,
          },
          error
        );

        if (process.env.NODE_ENV !== "production" && error.stack && ctx.status === 500) {
          response.stack = error.stack;
        }

        ctx.body = response;
      }
    };
  },
  adminRequired() {
    return async (ctx, next) => {
      let token = ctx.headers["authorization"];

      if (!token) {
        ctx.status = 400;
        return (ctx.body = { message: "无效的token" });
      }
      token = token.split(" ")[1];

      try {
        var decodeToken = jwt.verify(token, secretKey);
      } catch (error) {
        ctx.status = 400;
        if (error.name === "TokenExpiredError") {
          return (ctx.body = { message: "过期的token" });
        }
        return (ctx.body = { message: "无效的token" });
      }

      ctx.state.admin = decodeToken;
      await next();
    };
  },
};
