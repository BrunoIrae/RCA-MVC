const Sequelize = require("sequelize")

const sequelize = new Sequelize('cadastro_user', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}