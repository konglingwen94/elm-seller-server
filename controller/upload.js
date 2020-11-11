const multer = require("koa-multer");

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
}); 

const uploader = multer({ storage: storage });

module.exports = {
  uploader,
  deleteOne(ctx) {
    const fs = require("fs");
    const path = require("path");
    const filename = ctx.params.filename;
    if (!filename) {
      return (ctx.body = {
        message: "请添加要删除的文件名称",
      });
    }
    try {
      fs.unlinkSync(path.join(__dirname, "../public/uploads/" + filename));
    } catch (error) {
      // console.log(error);
      if (error.errno === -2) {
        ctx.status = 404;
        return (ctx.body = { message: "没有此文件" });
      }
    }

    ctx.status = 204;
  },
  uploadOne(ctx) {
      
      
    if (!ctx.req.file) {
      return (ctx.body = {
        message: "请选择上传的文件",
      });
    }

    ctx.body = {
      path: `/uploads/${ctx.req.file.filename}`,
    };
  },
};
