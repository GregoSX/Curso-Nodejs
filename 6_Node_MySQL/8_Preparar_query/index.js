const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn');

const app = express();

// CONFIGURANDO O HANDLEBARS
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// CONFIGURANDO ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// CONFIGURANDO O BODY PARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROTA PARA ADICIONAR LIVRO
app.post('/books/insertbook', (req, res) => {
    const { title, pageqty } = req.body;

    const query = `INSERT INTO books (??, ??) VALUES (?, ?)`;
    const data = ['title', 'pageqty', title, pageqty];

    pool.query(query, data, (err, result) => {
        if(err) throw err;

        res.redirect('/books');
    });
});

// ROTA PARA LISTAR LIVROS
app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';

    pool.query(query, (err, data) => {
        if(err) throw err;

        res.render('books', { books: data });
    });
});

//ROTA PARA LISTAR LIVRO INDIVIDUAL
app.get('/books/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(query, data, (err, result) => {
        if(err) throw err;

        res.render('book', { book: result[0] });
    });
});

// ROTA PARA CARREGAR A PÁGINA DE EDIÇÃO
app.get('/books/edit/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(query, data, (err, result) => {
        if(err) throw err;

        res.render('editbook', { book: result[0] });
    });
});

// ROTA PARA EDITAR LIVRO
app.post('/books/updatebook', (req, res) => {
    const { id, title, pageqty } = req.body;

    const query = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ['title', title, 'pageqty', pageqty, 'id', id];

    pool.query(query, data, (err, result) => {
        if(err) throw err;

        res.redirect('/books');
    });
});

// ROTA PARA DELETAR LIVRO
app.post('/books/remove/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM books WHERE ?? = ?`;
    const data = ['id', id];
 
    pool.query(query, data, (err, result) => {
        if(err) throw err;

        res.redirect('/books');
    });
});

// ROTA PADRÃO
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});