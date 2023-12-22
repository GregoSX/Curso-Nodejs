const Product = require('../models/Product');

module.exports = class ProductController {
    static async showProducts(req, res) {
        res.render('products/all');
    }

    static async createProduct(req, res) {
        res.render('products/create');
    }

    static async createProductPost(req, res) {
        const { name, price, description } = req.body;
        const product = new Product({ name, price, description });
        await product.save();
        res.redirect('/products');
    }
}