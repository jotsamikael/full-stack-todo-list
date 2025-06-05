const {DataTypes} = require('sequelize')
const db = require('../config/db')

 const Task = db.define('Task', {
  idTask: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
 
  is_archived: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'Task',
  timestamps: true, //Sequelize automatically handles createdAt and updatedAt
});

module.exports = Task
