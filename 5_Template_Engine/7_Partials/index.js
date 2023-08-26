const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: 'views/partials',
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node JS',
            category: 'Javascript',
            body: 'Este post é sobre Node JS',
            comment: 'Este post é muito bom'
        },
        {
            title: 'Aprender React JS',
            category: 'Framework',
            body: 'Este post é sobre React JS',
            comment: 'Este post é muito legal'
        }
    ]

    res.render('blog', { posts });
});

app.get('/posts', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node JS',
            category: 'Javascript',
            body: 'Este post é sobre Node JS',
            comment: 'Este post é muito bom'
        },
        {
            title: 'Aprender React JS',
            category: 'Framework',
            body: 'Este post é sobre React JS',
            comment: 'Este post é muito legal'
        }
    ]

    res.render('posts', { posts });
});

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