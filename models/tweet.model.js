const {  DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");

    const Tweet = sequelize.define("tweet", {
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    });
    
module.exports = Tweet;
