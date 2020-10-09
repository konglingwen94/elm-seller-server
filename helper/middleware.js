module.exports = {
  response() {
    return async (ctx, next) => {
      try {
        var results = await next();
      } catch (error) {
        // console.dir(error);
        ctx.status = error.status || 500;
        ctx.body = { message: error.message,stack:error.stack };
        return;
      }
      ctx.body = results;
    };
  },
};
