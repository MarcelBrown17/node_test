const db = require("../config");

class Products {
  fetchProducts(req, res) {
    const query = `SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products;`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchProduct(req, res) {
    const query = `SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id};`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  // addProduct(req, res) {
  //   const query = `INSERT INTO Products SET ?;`;
  //   db.query(query, req.body, (err) => {
  //     if (err) throw err;
  //     res.json({
  //       status: res.statusCode,
  //       message: "A new product has been added!",
  //     });
  //   });
  // }
  addProduct(req, res) {
    const query = `INSERT INTO Products SET ?;`;
    const products = {
      prodID: req.body.prodID,
      prodName: req.body.prodName,
      quantity: req.body.quantity,
      amount: req.body.amount,
      Category: req.body.Category,
      prodUrl: req.body.prodUrl,
    };
    db.query(query, products, (err, products) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Product has been added",
        products,
      });
    });
  }
  updateProduct(req, res) {
    const query = `UPDATE Products SET ? WHERE prodID = ?;`;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        message: "Product updated!",
      });
    });
  }
  deleteProduct(req, res) {
    const query = `DELETE FROM Products WHERE prodID = ${req.params.id};`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        message: "Product removed!",
      });
    });
  }
}
module.exports = Products;
