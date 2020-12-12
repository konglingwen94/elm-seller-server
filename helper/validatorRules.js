 
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
    password: {
      type: "string",
      min: 6,
    },
    username: {
      type: "string",
      required: true,
    },
    
  },
};
