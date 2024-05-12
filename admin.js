const express=require('express');

const router=express.Router();

router.get('/add-product', (req, res) => {
    res.send(`<form action="/admin/add-product" method="POST">
            <label for="product-name">Product Name:</label>
            <input type="text" id="product-name" name="productName"><br>
            <label for="product-price">Product Price:</label>
            <input type="text" id="product-price" name="productPrice"><br>
            <button type="submit">Add Product</button> </form>`);
  });

  router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
    });

    module.exports=router;