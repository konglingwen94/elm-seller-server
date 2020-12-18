# 商家

## 获取商家信息

`GET /admin/seller`

`GET /seller`

### Response

```json
{
  "pics": [
    "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
    "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
    "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
    "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
  ],
  "infos": [
    "该商家支持发票,请下单写好发票抬头",
    "品类:其他菜系,包子粥店",
    "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
    "营业时间:10:00-20:30"
  ],
  "_id": "5fd5a16aa1874883185feb25",
  "name": "粥品香坊（回龙观）",
  "description": "蜂鸟专送",
  "deliveryTime": 38,
  "score": 4.2,
  "serviceScore": 4.1,
  "foodScore": 4.3,
  "rankRate": 69.2,
  "minPrice": 20,
  "deliveryPrice": 4,
  "ratingCount": 24,
  "sellCount": 90,
  "bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
  "supports": [
    {
      "_id": "5fd72273ae61a1307c5bd4c2",
      "type": 0,
      "description": "在线支付满28减5"
    }
  ],
  "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
  "createdAt": "2020-12-13T05:06:50.763Z",
  "updatedAt": "2020-12-14T08:29:39.385Z",
  "__v": 0,
  "totalSellCount": 2630,
  "totalPrice": 30366,
  "totalFoodCount": 40
}
```

## 更新商家信息

`PATCH /admin/seller/:id`

|     Field     |      Type       | Description  | Required |
| :-----------: | :-------------: | :----------: | :------: |
|     name      |      Type       |   商家名称   |    No    |
|    avatar     |      Type       |   商家头像   |    No    |
|   bulletin    |      Type       |   商家公告   |    No    |
|     infos     |      Type       |   商家信息   |    No    |
|     pics      |      Type       |   商家实景   |    No    |
|   supports    | Array<support\> | 支持优惠活动 |    No    |
| deliveryPrice |     Number      |    配送费    |    No    |
|   minPrice    |     Number      |    起送价    |    No    |

### Response

`HTTP/1.1 204 No Content`
