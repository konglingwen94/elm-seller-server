# 评价

## 获取评价列表

`GET /admin/ratings`

### Query String Parameters

|   Field   |  Type  | Description  | Required |
| :-------: | :----: | :----------: | :------: |
|   page    | Number |   当前页数   |    No    |
| pageSize | Number | 每页显示个数 |    No    |


### Response

```json
{
  "data": [
    {
      "recommend": [],
      "_id": "5fd5a16aa1874883185fea8d",
      "username": "3******b",
      "rateTime": "2016-07-23T08:19:24.000Z",
      "rateType": 0,
      "text": "",
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "foodID": "5fd5a16aa1874883185fea8a",
      "createdAt": "2020-12-13T05:06:50.729Z",
      "updatedAt": "2020-12-13T05:06:50.729Z",
      "__v": 0,
      "food": {
        "online": true,
        "_id": "5fd5a16aa1874883185fea8a",
        "name": "田园蔬菜粥",
        "price": 10,
        "oldPrice": null,
        "description": "咸粥",
        "sellCount": 33,
        "rating": 100,
        "info": "",
        "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
        "menuID": "5fd5a16aa1874883185fea75",
        "createdAt": "2020-12-13T05:06:50.724Z",
        "updatedAt": "2020-12-13T05:06:50.724Z",
        "__v": 0,
        "id": "5fd5a16aa1874883185fea8a"
      },
      "id": "5fd5a16aa1874883185fea8d"
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 1
  },
  "total": 87
}
```

## 获取全部评价列表

`GET /ratings`

### Response

`HTTP/1.1 200 OK`

```json
[
  {
    "recommend": [],
    "_id": "5fd5a16aa1874883185fea4d",
    "username": "3******b",
    "rateTime": "2016-07-23T08:19:24.000Z",
    "rateType": 0,
    "text": "",
    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
    "foodID": "5fd5a16aa1874883185fea4a",
    "createdAt": "2020-12-13T05:06:50.728Z",
    "updatedAt": "2020-12-13T05:06:50.728Z",
    "__v": 0,
    "id": "5fd5a16aa1874883185fea4d"
  }
]
```

## 删除评价

`DELETE /admin/ratings/:id`

### Response

`HTTP/1.1 204 No Content`

## 批量删除评价

`POST /admin/ratings`

| Field  |      Type       | Description  |
| :----: | :-------------: | :----------- |
| idList | Array<ObjectId\> | 评价 id 集合 |

### Response

`HTTP/1.1 204 No Content`
