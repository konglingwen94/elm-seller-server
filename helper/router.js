const express = require("express");
const FoodsModel = require("../model/foods");
const MenuModel = require("../model/menu");
const RatingModel = require("../model/rating");
const SellerModel = require("../model/seller");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log(req.path);

  res.json("elm-seller");
});

module.exports = router;
