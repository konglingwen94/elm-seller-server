const id = { type: "string", min: 24, max: 24, required: true };
module.exports = {
  menu: {
    name: "string",
    type: {
      type: "enum",
      values: [-1, 0, 1, 2, 3, 4],
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
      allowEmpty: true,
    },
    description: {
      type: "string",
      required: false,
      allowEmpty: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  administrator: {
    oldPassword: {
      type: "string",
      min: 6,
    },
    newPassword: {
      type: "string",
      min: 6,
    },
    username: {
      type: "string",
      required: true,
    },
    id
  },
};
