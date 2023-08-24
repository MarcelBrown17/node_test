const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser");
const { users, products } = require("../models/Modelindex");
//Get methods
routes.get("/products", (req, res) => {
  products.fetchProducts(req, res);
});
routes.get("/products/:id", (req, res) => {
  products.fetchProduct(req, res);
});
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
  
});
routes.get("/users/:id", (req, res) => {
  users.fetchUser(req, res);
});
//Post
routes.post("/products", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});
//User post
routes.post("/users", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
//Put
routes.put("/products/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
//User put
routes.put("/users/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
//Patch
routes.patch("/products/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
//Users Patch
routes.patch("/users/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
//Delete
routes.delete("/products/:id", (req, res) => {
  products.deleteProduct(req, res);
});
//
routes.delete("/users/:id", (req, res) => {
  users.deleteUser(req, res);
});
//
module.exports = {
  express,
  routes,
};
