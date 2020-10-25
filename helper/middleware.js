const validateRules = require("./validatorRules");

function copy(source) {
  const obj = {};
  Object.keys(source).forEach((key) => {
    obj[key] = typeof source[key] === "object" ? copy(source[key]) : source[key];
  });
  return obj;
}
module.exports = {
  verifyParams(opts = {}) {
    const { ruleName, required } = opts;

    if (!validateRules.hasOwnProperty(ruleName)) {
      throw new Error(`Not Found ruleName ${ruleName}`);
    }

    const rules = copy(validateRules[ruleName]);
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

  response() {
    return async (ctx, next) => {
      try {
        var results = await next();
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

        return;
      }

      ctx.body = results;
    };
  },
};
