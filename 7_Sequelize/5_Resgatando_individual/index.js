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

// ROTA PARA CARREGAR O FORMULÁRIO DE CADASTRO DE USUÁRIO
app.get('/users/create', (req, res) => {
    res.render('addUser');
});

// ROTA PARA CADASTRAR USUÁRIO  
app.post('/users/create', async (req, res) => {
    const { name, occupation } = req.body;
    let { newsletter } = req.body;

    if(newsletter === 'on') {
        newsletter = true;
    }

    await User.create({name, occupation, newsletter})

    res.redirect('/');
});

// ROTA PARA LISTAR UM USUÁRIO
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    // const user = await User.findOne({raw: true, where: {id}});
    const user = await User.findByPk(id, {raw: true});

    res.render('userView', { user });
});

// ROTA PADRÃO, COM A LISTAGEM DE USUÁRIOS
app.get('/', async (req, res) => {
    // O raw: true faz com que o retorno seja apenas um array de objetos, 
    // sem as informações adicionais do Sequelize
    const users = await User.findAll({raw: true});

    res.render('home', { users });
});

// EVITA DE QUE A APLICAÇÃO FUNCIONE SEM AS TABELAS SEREM CRIADAS
conn
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000!');
        });
    }).catch((error) => {
        console.log('Não foi possível conectar ao banco de dados:', error);
    });