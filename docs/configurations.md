---
sidebar: auto
---

# 项目配置

## 数据库环境

### MongoDB

- [官方文档](https://docs.mongodb.com/manual/introduction/)
- [安装手册](https://docs.mongodb.com/manual/administration/install-on-linux/)

## 服务端环境

项目服务端基于 [nodejs.org](https://nodejs.org/) 进行开发。

### 版本要求

```
>= 10.x
```

### API 服务部署

#### 1. 安装项目依赖

```bash
npm install
```

#### 2. 编写配置文件

```js
// 开发环境配置文件 config/config.local.json

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
npm run start # 启动运行 API 服务
npm run stop # 停止运行 API 服务
```

#### 4. 执行初始化数据库管理员账户脚本

```bash
# 仅在第一次配置时执行， 默认创建超级管理员ROOT
node scripts/init-admin.js  管理员用户名 管理员密码
```
#### 5  执行初始化数据库静态数据脚本
```bash
# 为了使客户端展示初始化数据，可以在服务启动后一次性初始化编辑好的json数据到数据库.

node scripts/init-database.js
```

:::tip 提示 
如果不执行此操作，则需要在本项目提供服务的管理后台添加数据后才能显示对应客户端应用的数据  管理后台线上地址：<http://123.56.124.33:5000/admin>
:::