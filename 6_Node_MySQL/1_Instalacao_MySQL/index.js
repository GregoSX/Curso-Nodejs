const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// CONFIGURANDO O HANDLEBARS
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// CONFIGURANDO ARQUIVOS ESTÁTICOS
app.use(express.static('public'));


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