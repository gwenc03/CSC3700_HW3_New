const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require ("../controllers/adminController")

router.get( '/showCustomers', adminController.getCustomers);
router.get('/showItems', adminController.getItems);
router.get('/showSales', adminController.getSales);
router.get('/editCustomer/:cid', adminController.editCustomer);
router.get('/addCustomer', adminController.getAddCustomer);
router.post('/customer', adminController.postAddCustomer);
router.get('/addItem', adminController.getAddItem);
router.post('/item', adminController.postAddItem);
router.post('/postUpdateCustomer', adminController.postUpdateCustomer);
router.get('/home', adminController.getHomePage);

exports.routes = router;