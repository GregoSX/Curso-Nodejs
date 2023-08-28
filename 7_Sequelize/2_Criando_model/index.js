const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User');

const app = express();

// CONFIGURANDO O HANDLEBARS
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// CONFIGURANDO ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// CONFIGURANDO O BODY PARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// ROTA PADRÃO
app.get('/', (req, res) => {
    res.render('home');
});

// EVITA DE QUE A APLICAÇÃO FUNCIONE SEM AS TABELAS SEREM CRIADAS
conn
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000!');
        });
    }).catch((error) => {
        console.log(error);
    });