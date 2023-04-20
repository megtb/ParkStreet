// Therapist model

const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Therapist = db.define("therapist", {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING(1234),
    allowNull: false,
  },
  blurb: {
    type: DataTypes.STRING(1234),
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
        isEmail: true,
    }
    
  }
});

module.exports = Therapist;
