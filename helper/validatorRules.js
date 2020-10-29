module.exports = {
  menu: {
    name: "string",
    type: {
      type: "enum",
      values: [-1, 0, 1, 2, 3,4],
    },
  },
  foods: {
    name: {
      type: "string",
      required: false,
    },
    price: {
      type: "number",
      required: false,
    },
    oldPrice: {
      type: "number",
      required: false,
    },
  },
};