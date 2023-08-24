const Users = require("./userModel");
const Products = require("./productModel");

//export all objects
module.exports = {
  products: new Products(),
  users: new Users(),
};
