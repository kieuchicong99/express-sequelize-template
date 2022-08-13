const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('didong', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  }); 

const User = sequelize.define('user', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false});

const Task = sequelize.define(
    'task',  { 
      name: { type: DataTypes.STRING, allowNull: false }, 
      time: { type: DataTypes.INTEGER } 
  },{timestamps: false});

User.hasMany(Task, {as: "tasks"});
Task.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

(async () => {
    await sequelize.sync({ force: false });
    console.log("Table for  model had created")
  })();
module.exports = {User, Task}