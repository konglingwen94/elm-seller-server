module.exports = {
  name: "elm-seller-server",
  script: "./app.js",
  //   watch: true,
  env: {
    PORT: 5000,
    NODE_ENV: "development",
    mongoose: {
      database: "elm-seller",
      host: "127.0.0.1",
      port: "27017",
      username: "",
      password: "",
    },
  },
  env_production: {
    // "PORT": 5000,
    NODE_ENV: "production",
  },
};
