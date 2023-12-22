const { MongoClient } = require('mongodb');

// URL de conexão com o MongoDB
const url = 'mongodb://localhost:27017/testemongodb';

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
    } catch (err) {
        console.log(err);
    }
}

run();

module.exports = client;