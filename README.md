# elm-seller-server
饿了么商家店铺项目的后端接口项目

本项目是为前端项目<https://github.com/vue-seller-server.git>提供数据`API`服务的后端项目。

运行此项目之前需要安装`node^10.x.x`和`mongodb^4.x`

<!-- ## 项目运行环境 -->

## 传送门 

前端项目：<https://github.com/konglingwen94/vue-elm-sell>

## 安装

```bash
git clone https://github.com/konglingwen94/elm-seller-server.git

npm install

npm run dev // 开启一个热重载的开发环境服务器。默认端口为 `5000`

npm run dev:debug // 开启一个热重载的可调式的开发环境服务器。默认端口为 `5000`

npm run start  // 以后台模式开启服务器，适合生产环境使用
```

## 配置项目文件 `/ecosystem.config.js`

```js
module.exports = {
  name: "elm-seller-server",
  script: "./app.js",
  log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
  env: {  // 不指定环境变量的默认执行选项
    PORT: 5000,// 配置启动服务器端口
    NODE_ENV: "development",
    mongoose: {  // 配置数据库选项
      database: "elm-seller",
      host: "127.0.0.1",
      port: "27017",
      username: "",
      password: "",
    },
  },
  env_production: {  // 生产环境变量
    NODE_ENV: "production",
  },
};


```



## 项目目录

```bash
├── model  // 数据库模型
│   ├── seller.js
│   ├── rating.js
│   ├── menu.js
│   └── foods.js
├── helper  
│   ├── validatorRules.json
│   ├── router.js
│   ├── mongoose.js
│   ├── middleware.js
│   └── init-database.js
├── data // 数据库初始化数据，在向服务器添加数据之前可一次性初始化数据用于前端项目的展示
│   ├── seller.json
│   ├── ratings.json
│   └── goods.json
├── controller  // 控制器
│   ├── seller.js
│   ├── rating.js
│   ├── menu.js
│   └── foods.js
├── config
│   └── config.default.json
├── package.json
├── package-lock.json
├── ecosystem.config.js  // pm2 开启服务器的配置文件
├── app.js
└── README.md

```

## 技术栈
本项目是以`Koa`为应用框架，使用`mongoose`操作数据库搭建的`node`后端项目

路由管理：`koa-router`

参数校验：`koa-parameter`

参数解析：`koa-bodyparser`

静态资源托管：`koa-static`

## 支持

如果您觉得本项目还不错的话，请您动手点一下`star`，有了您的支持，我会有动力开源更多有趣的项目出来，谢谢！
