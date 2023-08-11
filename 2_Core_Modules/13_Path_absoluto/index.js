const path = require('path');

// path absoluto
console.log(path.resolve('teste.txt'));

// formar path
const midFolder = 'teste';
const fileName = 'grego.txt';
const finalPath = path.resolve(midFolder, fileName);

console.log(finalPath)