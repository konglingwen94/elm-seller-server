# 商品

## 获取商品列表

`GET /admin/foods`

### Query String Parameters

|  Field   |  Type  | Description  | Required |
| :------: | :----: | :----------: | :------: |
|   page   | Number |   当前页数   |    No    |
| pageSize | Number | 每页显示个数 |    No    |

### Response

```json
{
  "data": [
    {
      "online": true,
      "_id": "5fd5a16aa1874883185fea71",
      "name": "糊塌子",
      "price": 10,
      "oldPrice": 0,
      "description": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
      "sellCount": 80,
      "rating": 93,
      "info": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
      "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750",
      "menuID": "5fd5a16aa1874883185fea60",
      "createdAt": "2020-12-13T05:06:50.724Z",
      "updatedAt": "2020-12-13T05:49:00.371Z",
      "__v": 0,
      "category": {
        "_id": "5fd5a16aa1874883185fea60",
        "name": "小吃主食",
        "type": -1,
        "createdAt": "2020-12-13T05:06:50.725Z",
        "updatedAt": "2020-12-13T05:06:50.725Z",
        "__v": 0
      },
      "id": "5fd5a16aa1874883185fea71"
    }
  ],
  "total": 33,
  "pagination": {
    "page": 1,
    "pageSize": 1
  }
}
```

## 获取全部商品列表

`GET /foods`

### Response

```json
[
  {
    "online": true,
    "_id": "5fd5a16aa1874883185fea71",
    "name": "糊塌子",
    "price": 10,
    "oldPrice": 0,
    "description": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
    "sellCount": 80,
    "rating": 93,
    "info": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
    "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750",
    "menuID": "5fd5a16aa1874883185fea60",
    "createdAt": "2020-12-13T05:06:50.724Z",
    "updatedAt": "2020-12-13T05:49:00.371Z",
    "__v": 0,

    "id": "5fd5a16aa1874883185fea71"
  }
]
```

## 获取商品详情

`GET /admin/foods/:id`

`GET /foods/:id`

### Response

```json
{
  "online": true,
  "_id": "5fd5a16aa1874883185fea71",
  "name": "糊塌子",
  "price": 10,
  "oldPrice": 0,
  "description": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
  "sellCount": 80,
  "rating": 93,
  "info": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
  "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750",
  "menuID": "5fd5a16aa1874883185fea60",
  "createdAt": "2020-12-13T05:06:50.724Z",
  "updatedAt": "2020-12-13T05:49:00.371Z",
  "__v": 0,

  "id": "5fd5a16aa1874883185fea71"
}
```

## 添加商品

`POST /admin/foods`

### Request

|    Field    |   Type   | Description | Required |
| :---------: | :------: | :---------: | :------: |
|   menuID    | ObjectId | 商品分类 ID |   Yes    |
|    name     |  String  |  商品标题   |   Yes    |
|    image    |  String  |  商品封面   |   Yes    |
|    info     |  String  |  商品信息   |    No    |
| description |  String  |  商品描述   |    No    |
|  oldPrice   |  Number  |  商品原价   |   Yes    |
|    price    |  Number  |  商品售价   |   Yes    |

### Response

`HTTP1.1 200`

```json
{
  "online": true,
  "_id": "5fdc5ed1cf7f32eb8c23629c",
  "name": "汉堡",
  "price": 1,
  "oldPrice": 3,
  "image": "image",
  "createdAt": "2020-12-18T07:48:33.062Z",
  "updatedAt": "2020-12-18T07:48:33.062Z",
  "__v": 0,
  "id": "5fdc5ed1cf7f32eb8c23629c"
}
```

## 编辑商品

`PATCH /admin/foods/:id`

### Request

|    Field    |   Type   | Description | Required |
| :---------: | :------: | :---------: | :------: |
|   menuID    | ObjectId | 商品分类 ID |    No    |
|    name     |  String  |  商品标题   |    No    |
|    image    |  String  |  商品封面   |    No    |
|    info     |  String  |  商品信息   |    No    |
| description |  String  |  商品描述   |    No    |
|  oldPrice   |  Number  |  商品原价   |    No    |
|    price    |  Number  |  商品售价   |    No    |

### Response

`HTTP1.1 204 No Content`

## 删除商品

`DELETE /admin/foods/:id`

### Response

`HTTP/1.1 204 No Content`

## 上架商品

`PATCH /admin/foods/:id/enable`

### Response

`HTTP/1.1 204 No Content`

## 下架商品

`PATCH /admin/foods/:id/disable`

### Response

`HTTP/1.1 204 No Content`

### 获取商品统计信息

`GET /admin/food-statistic`

### Response

```json
[
  {
    "name": "红豆薏米美肤粥",
    "sellCount": 86,
    "ratingCount": 100,
    "highRating": 1
  }
]
```
