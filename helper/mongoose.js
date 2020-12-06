const mongoose = require("mongoose");
const defaultConfig = require("../config/config.default.json").mongodb;

module.exports = () => {
  return new Promise((resolve, reject) => {
    const { database, host, username, password } = defaultConfig;

    let URI = `mongodb://`;

    if (username && password) {
      URI += `${username}:${password}@`;
    }

    URI += `${host}/${database}`;

    mongoose.connect(
      URI,
      { useUnifiedTopology: true, useFindAndModify: false, useNewUrlParser: true },
      () => {
        resolve();
        console.log(`Database is connecting at ${URI}`);
      }
    );

    mongoose.connection.on("error", (err) => {
      reject(err);
    });
  });
};
