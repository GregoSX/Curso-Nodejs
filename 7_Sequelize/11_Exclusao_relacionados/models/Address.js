const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
});


// A TABELA USER TAMBÉM PRECISA TER UMA REFERÊNCIA PARA A TABELA ADDRESS
User.hasMany(Address);
// FAZENDO O RELACIONAMENTO - UM ENDEREÇO PERTENCE A UM USUÁRIO
Address.belongsTo(User);

module.exports = Address;