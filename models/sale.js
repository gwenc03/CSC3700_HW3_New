

const db = require("../util/database");

module.exports = class Sales {
    constructor(sid, cid, iid, quantity, salesdate) {
        this.SalesID = sid;
        this.CustomerID = cid;
        this.ItemID = iid;
        this.Quantity = quantity;
        this.SalesDate = salesdate;
        // this.description = "It was good it was bad it was ugly";
    }

    save() {
        return db.execute('insert into sales (sid, cid, iid, quantity, salesdate) ' +
            'values (?, ?, ?, ?, ?)',
            [this.SalesID, this.CustomerID, this.ItemID, this.Quantity, this.SalesDate]
        )
    }

    //
    static delete(cid) {
        return db.execute("delete from Sales where cid = ?",
            [cid]
        )
    }

    static fetchAll() {
        return db.execute("select * from Sales");
    }

    static findById(cid) {
        return db.execute("select * from Sales where cid = ?",
            [cid]);
    }
}