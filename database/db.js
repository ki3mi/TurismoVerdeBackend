import {Sequelize} from 'sequelize'

const db = new Sequelize('turismoverde', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db