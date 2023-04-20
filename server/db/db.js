const Sequelize = require('sequelize')
const PACKAGE_NAME = 'therapists'

const db = new Sequelize(`postgres://localhost:5432/${PACKAGE_NAME}`, {
    logging:false,
})

module.exports = db