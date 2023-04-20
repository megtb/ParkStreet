// Match Sequelize instance (`db`) to model

const db = require('./db')

//model import
const Therapist = require('./models/Therapist')

module.exports = {
  db,
  models: {
    Therapist,
  }
}
