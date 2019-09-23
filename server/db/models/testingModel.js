const Sequelize = require('sequelize')
const db = require('../db')

const TestingModel = db.define('testingModel', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
})
