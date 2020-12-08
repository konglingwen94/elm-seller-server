const mongoose = require("mongoose");
try {
  var prodConfig = require("../config/config.prod.json").mongodb;
} catch (error) {
  prodConfig = {};
}
let defaultConfig = require("../config/config.default.json").mongodb;

module.exports = (NODE_ENV) => {
     
  if (NODE_ENV === "production" || NODE_ENV==='test') {
    Object.assign(defaultConfig, prodConfig);
  }
  return new Promise((resolve, reject) => {
    const { database, host, username, password,authSource } = defaultConfig;

    let URI = `mongodb://`;

    if (username && password) {
      URI += `${username}:${password}@`;
    }

    URI += `${host}/${database}`;

    if(authSource){
      URI+=`?authSource=${authSource}`
    }

     
 
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
