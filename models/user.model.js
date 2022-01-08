const {  DataTypes } = require('sequelize');
module.exports = ( connectionInstance ) => {
    const User = connectionInstance.define("User", {
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        notEmpty: true, 
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, 
        allowNull: false,
        notEmpty: true, 
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
      }
    });
    return User;
};