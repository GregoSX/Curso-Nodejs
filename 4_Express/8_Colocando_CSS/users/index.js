const express = require('express')
const path = require('path')
const router = express.Router()

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/addUser.html`)
})

router.post('/save', (req, res) => {
    const { name, age } = req.body

    console.log(`Nome: ${name} e idade: ${age}`)

    res.sendFile(`${basePath}/addUser.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela de users 
    console.log(`Estamos buscando o usuário com id ${id}`)

    res.sendFile(`${basePath}/user.html`)
})

module.exports = router