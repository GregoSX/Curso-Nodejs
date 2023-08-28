const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

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

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

    conn.query(query, (err, result) => {
        if(err) throw err;

        res.redirect('/books');
    });
});

// ROTA PARA LISTAR LIVROS
app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';

    conn.query(query, (err, data) => {
        if(err) throw err;

        res.render('books', { books: data });
    });
});

//ROTA PARA LISTAR LIVRO INDIVIDUAL
app.get('/books/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM books WHERE id = ${id}`;

    conn.query(query, (err, data) => {
        if(err) throw err;

        res.render('book', { book: data[0] });
    });
});

// ROTA PADRÃO
app.get('/', (req, res) => {
    res.render('home');
});

// CONEXÃO COM O BANCO DE DADOS
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql'
});

// VALIDANDO A CONEXÃO
conn.connect((err) => {
    if(err) throw err;
    
    console.log('Conectado ao banco de dados!');

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000!');
    });
});