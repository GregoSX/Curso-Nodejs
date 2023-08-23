const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')


// ler o body da requisição
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/addUser.html`)
})

app.post('/users/save', (req, res) => {
    const { name, age } = req.body

    console.log(`Nome: ${name} e idade: ${age}`)

    res.sendFile(`${basePath}/addUser.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela de users 
    console.log(`Estamos buscando o usuário com id ${id}`)

    res.sendFile(`${basePath}/user.html`)
})



app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('Servidor executando na porta', port)
})