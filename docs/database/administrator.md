# 管理员

> Model名称:  Administrator

|  Field   |  Type  |  Description   |           Enum           |
| :------: | :----: | :------------: | :----------------------: |
| username | String |  管理员用户名  |                          |
| password | String | 管理员登陆密码 |                          |
|  level   | Number | 管理员角色级别 |      `1`,`100`      |
|   role   | String |   管理员角色   | `JUNIOR`,`SENIOR`,`ROOT` |



::: warning `ROOT` 角色
`ROOT` 角色不允许通过接口进行创建，只能通过脚本进行创建。
:::





