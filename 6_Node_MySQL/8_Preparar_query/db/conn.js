const mysql = require ('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql'
});

// VALIDANDO A CONEXÃO
pool.getConnection((err, conn) => {
    if(err) throw err;

    console.log('Conectado ao banco de dados!');
});

module.exports = pool