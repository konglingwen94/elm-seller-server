# elm-seller-server

饿了么商家店铺项目的后端接口项目

本项目是为前端项目<https://github.com/konglingwen94/vue-elm-sell>提供数据`API`服务的后端项目。

运行此项目之前需要安装`node^10.x.x`和`mongodb^4.x`

<!-- ## 项目运行环境 -->

## 传送门

前端项目：<https://github.com/konglingwen94/vue-elm-sell>

管理后台: <https://github.com/konglingwen94/vue-seller-admin>

## 安装

```bash
git clone https://github.com/konglingwen94/elm-seller-server.git

npm install

npm run dev // 开启一个热重载的开发环境服务器。默认端口为 `5000`

npm run dev:debug // 开启一个热重载的可调式的开发环境服务器。默认端口为 `5000`

npm run start  // 以后台模式开启服务器，生产环境使用
```

## 以 PM2 方式启动项目的配置文件 <https://github.com/konglingwen94/elm-seller-server/blob/master/ecosystem.config.js>

```js
module.exports = {
  name: "elm-seller-server",
  script: "./app.js",
  log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
  env: {
    // 不指定环境变量的默认执行选项
    PORT: 5000, // 配置启动服务器端口
    NODE_ENV: "development",
  },
  env_production: {
    // 生产环境变量
    NODE_ENV: "production",
  },
};
```
## 项目配置文件  [/config/config.default.json](/config/config.default.json)

```json
{
  "mongodb": {       // 数据库配置
    "database": "elm-seller",
    "host": "127.0.0.1",
    "port": "27017",
    "username": "",
    "password": ""
  },
  "expiresIn": "2d",      // token有效期
  "secretKey": "secretkey" // jwt 加密密钥
}


```


## 项目目录

```bash
├── model  // 数据库模型
│   ├── administrator.js
│   ├── seller.js
│   ├── rating.js
│   ├── menu.js
│   └── foods.js
├── helper
│   ├── validatorRules.json  // 参数验证规则
│   ├── mongoose.js  // mongoose连接脚本
│   ├── middleware.js // 项目中间件
│   └── util.js  // 工具函数
├── data // 数据库初始化数据
│   ├── seller.json
│   ├── ratings.json
│   └── goods.json
├── controller  // 控制器
│   ├── administrator.js
│   ├── seller.js
│   ├── rating.js
│   ├── menu.js
│   └── foods.js
├── config
│   └── config.default.json  // 项目配置文件
├── router
│   └── index.js  // 路由配置
├── scripts/          // 可执行脚本文件
│   ├── init-admin.js
│   └── init-database.js
├── package.json
├── package-lock.json
├── ecosystem.config.js  // pm2 开启服务器的配置文件
├── app.js      // 项目启动入口文件
└── README.md

```

## 技术栈

本项目是以`Koa`为应用框架，使用`mongoose`操作数据库搭建的`node`后端项目

路由管理：`koa-router`

参数校验：`koa-parameter`

参数解析：`koa-bodyparser`

静态资源托管：`koa-static`

请求资源压缩 : `koa-compress`

单页应用路由请求路径回退中间件 : `koa2-connect-histroy-api-fallback`

token生成 ：`jsonwebtoken`

数据库密码加密 : `bcrypt.js`
## 支持

如果您觉得本项目还不错的话，请您动手点一下`star`，有了您的支持，我会有动力开源更多有趣的项目出来，谢谢！
