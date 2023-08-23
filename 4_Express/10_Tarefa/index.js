const express = require('express')
const path = require('path')

const basePath = path.join(__dirname, 'templates')

const port = 5000
const app = express()

app.use(express.static('public'))

const contactRoutes = require('./routes/contact')

app.use('/contact', contactRoutes)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))