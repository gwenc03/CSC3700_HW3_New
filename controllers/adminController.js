const adminData = require("../routes/admin");
// const Product = require("../models/oproduct");
const Customer = require("../models/customer");
const Item = require("../models/item")
const Sale = require("../models/sale")
// let products = [];
exports.getAddProduct = ( req, res, next) => {
    res.render( 'admin/addProduct',
        {
            from: 'addProduct'
        })
}
exports.postAddProduct = ( req, res, next) => {
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price;
    res.send(`made it to postAddProduct title:${t}`);
    // const product = new Product( t, a, p );
    // product.save();
    // products.push({
    //     title: t,
    //     author: a,
    //     price: p
    // })
    const product = new Product(t, a, p);
    product.save();
    res.redirect('/showAdmin')
}
exports.getCustomers = (req, res, next) => {
    Customer.runCustomerQuery()
        .then((rows, fieldData ) => {
            console.log("Rows="); console.log(rows);
            res.render("admin/showCustomersAdmin", {
                title: "Customer Info",
                from: "showCustomers",
                customers: rows[0]
            })
        })
}
exports.getItems = (req, res, next) => {
    Item.runItemQuery()
        .then((rows, fieldData ) => {
            console.log("Rows="); console.log(rows);
            res.render("admin/showItemAdmin", {
                title: "Item Info",
                from: "showItems",
                items: rows[0]
            })
        })
}

exports.getSales = (req, res, next) => {
    Sale.runSaleQuery()
        .then((rows, fieldData ) => {
            console.log("Rows="); console.log(rows);
            res.render("admin/showSalesAdmin", {
                title: "Sales Info",
                from: "showSales",
                sales: rows[0]
            })
        })
}

exports.editCustomer = ( req, res, next ) => {
    let id = req.params.cid;
    console.log( "Inside Edit .... id=" + id );
    // fetch all the records and find the idth one
    Customer.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            // console.log( rows[0][0] );
            // res.send("It must works");
            console.log(rows[0][0]);
            res.render( 'admin/ShowUpdateForm', {
                title : `Update record:${id} `,
                id : rows[0].id,
                from: 'updateProducts',
                customer: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}
// exports.postUpdateProduct = ( req, res, next ) => {
//     let id = req.body.productId;
//     let author = req.body.author;
//     let title = req.body.title;
//     let price = req.body.price;
//     const product = new Product( title, author, price);
//     product.update(id).then ((rows, fieldData) => {
//         res.redirect('/showAdmin')
//     }).catch(err => {
//         console.log('WTH');
//         console.log(err);
//     })
//     console.log(`-----id:${id}`);
//     // console.log( `author:${author}`)
//     // console.log( `title:${title}`)
//     // console.log( `price:${price}`)
//     // res.send("Happy day are here again made it to most update product" +id);

// exports.getProducts = ( req, res, next ) => {
//     Product.fetchAll()
//         .then(( rows, fieldData ) => {
//             console.log( "ROws="); console.log( rows );
//             // res.send( "Is seems ok ");
//             res.render( 'admin/showProductsAdmin', {
//                 title: "Show Products Available (DB)",
//                 from: 'showProducts',
//                 products: rows[0]
//             })
//         })
// }
// exports.deleteProduct = ( req, res, next ) => {
//     // Left off here ... need to code delete.
//     // It is coded in modles.
//     let id = req.params.id;
//     console.log(`id:${id}`);
//     res.send("Maybe worked" + id);
//     Product.delete(id)
//         .then((res)=> {
//             res.redirect("/showAdmin")
//         })
//         .catch(err => {
//             console.log("Error on delete");
//             console.log(err);
//         })
// }

// }