const fs = require('fs');

if(!fs.existsSync("./teste")) {
    console.log("Diretório não existe")
    fs.mkdirSync("./teste")
} else {
    console.log("Diretório já existe")
} 