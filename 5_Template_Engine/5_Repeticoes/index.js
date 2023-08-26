const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
    const items = ["item a", "item b", "item c"];

    res.render('dashboard', { items });
});

app.get('/', (req, res) => {
    const user = {
        name: 'Guilherme',
        surname: 'Grego'
    }

    const palavra = 'teste';

    const auth = true;

    res.render('home', { user: user, palavra, auth });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})