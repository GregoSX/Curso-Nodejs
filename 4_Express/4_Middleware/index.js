const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const checkAuth = (req, res, next) => {
    req.authStatus = true

    if(req.authStatus) {
        console.log('Usuário autenticado')
        next()
    } else {
        console.log('Usuário não autenticado')
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('Servidor executando na porta', port)
})