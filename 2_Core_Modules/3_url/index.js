const url = require('url')
const address = "https://meusite.com.br/catalog?product=notebook&format=pdf"
const parsedUrl = new URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get("product"))