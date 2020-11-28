const bcrypt = require("bcrypt");
const AdministratorModel = require("../model/administrator");
const connectDB = require("../helper/mongoose");
 

const argv = process.argv.slice(2);

if (argv.length !== 2) {
  console.error("username and password is required");
  console.log("Please use following command");
  console.log("node scripts/init-admin.js <username> <password>");
  process.exit(1);
}
 
const [username, password] = process.argv.slice(2);

connectDB()
  .then(() => {
    return AdministratorModel.findOne();
  })
  .then((result) => {
    if (result) {
      throw Error("Admin is initialized ");
    }
    return bcrypt.hash(password,10);
  })
  .then((password) => {
    const payload = { username, password };
    return AdministratorModel.create(payload);
  })
  .then((result) => {
    console.log(`Successfully create account ${result}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
