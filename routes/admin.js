const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require ("../controllers/adminController")
const productsController = require("../controllers/oproducts");
// let products = [];
// router.get(  '/add-product', (req, res, next) => {
//     res.render( 'addProduct',
//         {
//             from: 'addProduct'
//         })
// });
// router.get('/add-product', adminController.getAddProduct);
// router.post('/product', adminController.postAddProduct);
// router.get('/showAdmin', adminController.getProducts);
// router.get('/deleteItem/:id', adminController.deleteProduct);
// router.get('/editItem/:id', adminController.editProduct);
// router.post('/postUpdateProduct', adminController.postUpdateProduct);

router.get( '/showCustomers', adminController.getCustomers);
router.get('/showItems', adminController.getItems);
router.get('/showSales', adminController.getSales);
router.get('/editCustomer/:cid', adminController.editCustomer);

// router.post(  '/product', (req, res, next) => {
//     // console.log( req );
//     console.log("----flag")
//     // let t = req.body.title;
//     // products.push( {title: t})
//     // res.redirect('/add-product')
//     let t = req.body.title;
//     let a = req.body.author;
//     let p = req.body.price;
//     products.push({
//         title: t,
//         author: a,
//         price: p
//     })
//     res.redirect('/add-product')
//     // res.send(`Made it to post title:${t}`);
// });
//
// // module.exports = router;
// exports.products = products;
// exports.routes = router;

// exports.products = products;
exports.routes = router;