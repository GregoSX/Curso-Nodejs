const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const Task = require('./models/Task');

// Configuração do handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Configuração do body-parser para receber dados de formulários
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

const port = 3000;

conn
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });