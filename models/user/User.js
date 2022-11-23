const bd_user = require('../user/bd_user')

const User = bd_user.sequelize.define('user', {
    nome_user:{
        type: bd_user.Sequelize.STRING
    },
    email:{
        type: bd_user.Sequelize.STRING
    },
    senha:{
        type: bd_user.Sequelize.STRING
    },
    confirma_senha:{
        type: bd_user.Sequelize.STRING
    }
})

//Criar a tabela
//User.sync({force: true})

module.exports = User