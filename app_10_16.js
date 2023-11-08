// Ashlyn Nakashima and Gwen Canos
// CSC 3700
// Homework 3

const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views

const dp = require('./util/database');

const adminRoutes = require("./routes/admin");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( adminRoutes.routes);

app.get('*', function(req, res){
    let pt = "Welcome to Happy Harry's Hardware"

    res.render( 'notFound', {
        title:pt,
        subTitle: "Let's shop for products",
    });
})

let port = 3023;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);