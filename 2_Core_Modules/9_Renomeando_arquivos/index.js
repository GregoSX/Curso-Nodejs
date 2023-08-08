const fs = require('fs')

fs.rename('arquivo.txt', 'arquivo_renomeado.txt', (err) => {
    if(err) {
        console.log(err)
        return
    } 
    console.log('Arquivo renomeado!')
})