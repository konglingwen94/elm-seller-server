# 商品表

> Model 名称： Foods

|    Field    |   Type   | Description |
| :---------: | :------: | :---------: |
|   menuID    | ObjectId | 商品分类 ID |
|    name     |  String  |  商品标题   |
|    info     |  String  |  商品信息   |
| description |  String  |  商品简介   |
|    image    |  String  |  商品封面   |
|   online    | Boolean  |  是否发布   |
|  oldPrice   |  Number  |  商品原价   |
|    price    |  Number  |  商品售价   |
|  sellCount  |  Number  |  售卖个数   |

### 虚拟字段

|  Field   |              Type              | Description |
| :------: | :----------------------------: | :---------: |
| category |    [Object](./category.md)     |  所属分类   |
| ratings  | [Array\<rating\>](./rating.md) |  商品评价   |
