const mongoose = require("mongoose");
const defaultConfig = require("../config/config.default.json");

module.exports = () => {
  return new Promise((resolve, reject) => {
    const { database,host, port, username, password } = defaultConfig;

    let URI = `mongodb://`;

    if (username && password) {
      URI += `${username}:${password}@`;
    }

    URI += `${host}/${database}`;



    mongoose.connect(URI, () => {
      resolve();
      console.log(`Database is connecting at ${URI}`);
    });

    mongoose.connection.on("error", (err) => {
      reject(err);
    });
  });
};
