module.exports = {
   response() {
    return async (ctx, next) => {
      try {
        var results = await next();
        console.log(results);
      } catch (error) {
        ctx.body = error;
        return
        // ctx.body = { message: error.message };
      }
      ctx.body = results;
    };
  },
  
};
