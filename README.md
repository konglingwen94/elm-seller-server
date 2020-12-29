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

```

## 编写配置文件

```js
// 开发环境配置文件 config/config.default.json

{
  secretKey: '随机安全 key',
  expiresIn:'token过期时间',  
  // MongoDB configs.
  mongodb: {
    host: '127.0.0.1',
    port: 27017,
    database: '数据库名称',
    username: '数据库账号',
    password: '数据库密码',
  },
}
```

#### 3. 运行 API 服务

```bash

npm run dev // 开启一个热重载的开发环境服务器。默认端口为 `5000`

npm run dev:debug // 开启一个热重载的可调式的开发环境服务器。默认端口为 `5000`

npm run start  // 以后台模式开启服务器，生产环境使用

npm run stop # 停止运行 API 服务

```

#### 4. 执行初始化数据库脚本

```bash
# 仅在第一次配置时执行， 默认创建超级管理员ROOT
node scripts/init-admin.js  管理员用户名 管理员密码
```
#### 5 执行初始化数据库静态数据脚本

```bash
# 为了使客户端展示初始化数据，需要在服务启动后一次性初始化编辑好的json数据到数据库.

node scripts/init-database.js
```


>如果不执行此操作，则需要在本项目提供服务的管理后台添加数据后才能显示对应客户端应用的数据 管理后台线上地址：<http://123.56.124.33:5000/admin>



## 项目目录

```bash
├── model  // 数据库模型
│   ├── administrator.js
│   ├── seller.js
│   ├── rating.js
│   ├── category.js
│   └── food.js
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
│   ├── category.js
│   └── food.js
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

## 项目总结

- [Koa+Mongodb 搭建商家店铺服务端项目总结](https://juejin.cn/post/6907803934031609863)
- [Vue+ElementUI搭建商家店铺管理后台项目总结](https://juejin.cn/post/6906796790390095879)
- [Vue全新技术栈重构黄老师饿了么商家应用](https://juejin.cn/post/6844904202624303118)

## 支持

如果您觉得本项目还不错的话，请您动手点一下`star`，有了您的支持，我会有动力开源更多有趣的项目出来，谢谢！
