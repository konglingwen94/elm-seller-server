# 店铺

> Model名称 Seller

|     Field     |      Type      | Description  |
| :-----------: | :------------: | :----------: |
|     name      |     String     |   店铺名称   |
|  description  |     String     |   店铺描述   |
|     image     |     String     |   店铺封面   |
|   bulletin    |     String     |   店铺公告   |
| deliveryPrice |     Number     |   商品运费   |
| deliveryTime  |      Date      |   配送时间   |
|     score     |     Number     |   综合评分   |
|   foodScore   |     Number     |   商品评分   |
| serviceScore  |     Number     |   服务评分   |
|   minPrice    |     Number     |  商品起送价  |
|   supports    | Array<support\> | 店铺优惠信息 |
|     infos     | Array<string\>  |   店铺信息   |
|     pics      | Array<string\>  | 店铺实景图片 |

## Support

|    Field    |  Type  | Description | Enum |
| :---------: | :----: | :---------: | :--: |
|    type     | Number |  优惠类型   |  `-1`,`0`,`1`,`2`,`3`,`4`    |
| description | String |  优惠描述   |      |
