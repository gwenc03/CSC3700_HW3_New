

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
        return db.execute( "delete from Customer where CustomerID = ?",
            [cid]
        )
    }
    static fetchAll(){
        return db.execute( "select * from Customer");
    }
    static findById( cid ){
        return db.execute( "select * from Customer where CustomerID = ?",
            [cid] );
    }
    update ( cid ){
        return db.execute( "UPDATE products SET name = ?, email= ?  WHERE CustomerID = ?",
            [this.CustomerName, this.CustomerEmail, cid ] );
    }
    static runCustomerQuery(){
        return db.execute("select c.CustomerID, c.CustomerName, c.CustomerEmail, SUM(i.ItemPrice * s.Quantity) AS TotalSales" +
        " FROM Customer c" +
        " LEFT JOIN Sales s ON c.CustomerID = s.CustomerID" +
        " LEFT JOIN Item i ON s.ItemID = i.ItemID" +
        " GROUP BY c.CustomerName" +
        " order by TotalSales DESC")

        // return db.execute("select i.ItemName, SUM(i.ItemPrice * s.Quantity) AS TotalSales" +
        //     " FROM Item i" +
        //     " JOIN Sales s ON s.ItemID = i.ItemID" +
        //     " GROUP BY i.ItemID" +
        //     " order by TotalSales DESC")
    }
}