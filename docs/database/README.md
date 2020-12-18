# 数据库表结构设计文档

## 通用字段

|   Field   |  Type  |   Description    |
| :-------: | :----: | :--------------: |
|    _id     | String |       主键       |
| createdAt |  Date  |   数据创建时间   |
| updatedAt |  Date  | 数据最后更新时间 |

## 通用类型

### ObjectId

[MongoDB 主键类型](https://docs.mongodb.com/manual/reference/method/ObjectId/)，24 位的字符串。

 
