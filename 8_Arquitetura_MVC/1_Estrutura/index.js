const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

// Configuração do handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Configuração do body-parser para receber dados de formulários
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});