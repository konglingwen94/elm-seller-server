# 评价表

> Model 名称：Rating

|   Field    |      Type       | Description  |   Enum   |
| :--------: | :-------------: | :----------: | :------: |
|   foodID   |    ObjectId     |   商品 ID    |          |
| ratingTime |      Date       |   评价时间   |          |
|  rateType  |     Number      |   评价等级   | `-1`,`0` |
|    text    |     String      |   评论内容   |          |
|  username  |     String      |   评论用户   |          |
|   avatar   |     String      | 评论用户头像 |          |
| recommend  | Array<string\> |   推荐商品   |          |

## 虚拟字段

| Field |            Type            | Description |
| :---: | :------------------------: | :---------: |
| food  | [Object](./food.md) |         评价商品    |
