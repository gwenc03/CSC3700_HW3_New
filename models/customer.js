

const db = require("../util/database");

module.exports = class Customer {
    constructor( cid, name, email ) {
        this.CustomerID = cid;
        this.CustomerName = name;
        this.CustomerEmail = email;
        // this.description = "It was good it was bad it was ugly";
    }
    save() {
            return db.execute( 'insert into customers (cid, name, email) ' +
                'values (?, ?, ?)',
                [this.CustomerID, this.CustomerName, this.CustomerEmail ]
            )
    }
    //
    static delete( cid ) {
        return db.execute( "delete from Customer where cid = ?",
            [cid]
        )
    }
    static fetchAll(){
        return db.execute( "select * from Customer");
    }
    static findById( cid ){
        return db.execute( "select * from Customer where cid = ?",
            [cid] );
    }
    update ( cid ){
        return db.execute( "UPDATE products SET name = ?, email= ?  WHERE cid = ?",
            [this.CustomerName, this.CustomerEmail, cid ] );
    }
}