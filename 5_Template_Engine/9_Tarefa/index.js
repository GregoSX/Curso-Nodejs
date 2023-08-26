const express = require('express');
const expbhbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expbhbs.engine());
app.set('view engine', 'handlebars');

app.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const products = [
        { name: 'Produto 1', price: 100 },
        { name: 'Produto 2', price: 200 },
        { name: 'Produto 3', price: 300 },
    ]

    const product = products[id];

    res.render('product', { product });
});

app.get('/', (req, res) => {
    const products = [
        { id: 0, name: 'Produto 1', price: 100 },
        { id: 1, name: 'Produto 2', price: 200 },
        { id: 2, name: 'Produto 3', price: 300 },
    ]

    res.render('home', { products });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});