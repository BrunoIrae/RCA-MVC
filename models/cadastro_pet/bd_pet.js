const Sequelize = require("sequelize")


const sequelize = new Sequelize('cadastro_pet', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}