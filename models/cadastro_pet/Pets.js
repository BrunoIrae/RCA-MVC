const bd_pets = require('../cadastro_pet/bd_pet')

const Pets = bd_pets.sequelize.define('pets', {
    nome_pet: {
        type: bd_pets.Sequelize.STRING
    },
    sexo_pet: {
        type: bd_pets.Sequelize.STRING
    },
    data_resgate: {
        type: bd_pets.Sequelize.DATE
    },
    comentario: {
        type: bd_pets.Sequelize.TEXT
    }
})

//Criar a tabela
//Pets.sync({force: true})

module.exports = Pets