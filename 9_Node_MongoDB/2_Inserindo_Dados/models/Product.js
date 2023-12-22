const conn = require('../db/conn');

class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    async save() {
        try {
            const product = await conn.db().collection('products').insertOne(this);
        } catch (err) {
            console.log("Erro ao inserir produto no banco de dados: ", err);
        }
    }
}

module.exports = Product;