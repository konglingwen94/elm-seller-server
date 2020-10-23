const validateRules = require("./validatorRules");
function pick(source, fields) {
  const result = {};
  fields.forEach((field) => {
    if (source.hasOwnProperty(field)) {
      result[field] = source[field];
    }
  });
  return result;
}

module.exports = {
  verifyParams() {
    return (ctx, next) => {
      const routerName = ctx._matchedRouteName;

      const schema = routerName && validateRules[routerName];

      if (typeof schema === "object") {
        ctx.verifyParams(schema);
        ctx.request.body = pick(ctx.request.body, Object.keys(schema));
      }

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
