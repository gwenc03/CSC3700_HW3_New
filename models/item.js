

const db = require("../util/database");

module.exports = class Item {
    constructor(iid, name, price) {
        this.ItemID = iid;
        this.ItemName = name;
        this.ItemPrice = price;
        // this.description = "It was good it was bad it was ugly";
    }

    save() {
        return db.execute('insert into items (iid, name, price) ' +
            'values (?, ?, ?)',
            [this.ItemID, this.ItemName, this.ItemPrice]
        )
    }

    //
    static delete(iid) {
        return db.execute("delete from Item where iid = ?",
            [iid]
        )
    }

    static fetchAll() {
        return db.execute("select * from Item");
    }

    static findById(iid) {
        return db.execute("select * from Item where iid = ?",
            [iid]);
    }
}