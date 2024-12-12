/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  gpa: {
    type: Sequelize.DOUBLE,
    allowNull: true,
    min: 0.0,
    max: 4.0
  },

  picture: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/id/1/50"
  }
});

// Export the student model
module.exports = Student;