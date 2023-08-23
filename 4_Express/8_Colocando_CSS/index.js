const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')

// ler o body da requisição
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))

const usersRouter = require('./users/index')
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('Servidor executando na porta', port)
})