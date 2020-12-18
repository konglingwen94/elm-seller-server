# 分类接口

## 添加分类

`POST /admin/menus`

### Request

| Field |  Type  | Description | Required |
| :---: | :----: | :---------: | :------: |
| name  | String |  分类名称   |   Yes    |
| type  | Number |  优惠活动   |   Yes    |

### Response

`HTTP/1.1 200 OK`

```json
{
  "_id": "5fdc61e3cf7f32eb8c23629d",
  "name": "精选菜单",
  "type": 0,
  "createdAt": "2020-12-18T08:01:39.017Z",
  "updatedAt": "2020-12-18T08:01:39.017Z",
  "__v": 0
}
```

## 编辑分类

`PATCH /admin/menus/:id`

### Request

| Field |  Type  | Description | Required |
| :---: | :----: | :---------: | :------: |
| name  | String |  分类名称   |   Yes    |
| type  | Number |  优惠活动   |   Yes    |

### Response

`HTTP1.1 204 No Content`

## 获取分类列表

`GET /admin/menus`

`GET /menus`

### Response

`HTTP/1.1 200 OK`

```js
[
  {
    _id: "5fdc61e3cf7f32eb8c23629d",
    name: "精选菜单",
    type: 0,
    createdAt: "2020-12-18T08:01:39.017Z",
    updatedAt: "2020-12-18T08:01:39.017Z",
    __v: 0,
    foodsCount: 0,
    id: "5fdc61e3cf7f32eb8c23629d",
  },
];
```

## 删除分类

`DELETE /admin/menus/:id`

### Response

`HTTP/1.1 204 No Content`
