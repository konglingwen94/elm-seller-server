# 分类表

> Model 名称: Menu

| Field |  Type  | Description  |           Enum           |
| :---: | :----: | :----------: | :----------------------: |
| name  | String |   分类名称   |                          |
| type  | Number | 分类活动类型 | `-1`,`0`,`1`,`2`,`3`,`4` |

### 虚拟字段（数据动态计算，不做存储）

|   Field    |  Type  | Description |
| :--------: | :----: | :---------: |
| foodsCount | Number |  商品个数   |
