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
    info: {
      type: "string",
      required: false,
    },
    image: {
      type: "string",
      required: false,
    },
  },
};
