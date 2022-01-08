const { Sequelize  } = require('sequelize');

const {dbConnect} = require("./databaseConnection");
const userModel  = require("../models/user.model");
const db = {};


dbConnect().then((connectionInstance)=>{

    db.Sequelize = Sequelize;
    db.connectionInstance = connectionInstance;
    db.userModel = userModel(connectionInstance);
    db.connectionInstance.sync({force:true});

}).catch((error)=>{
    console.log("error database module,",error)

});

const model = (modelName)=>{
    return db[modelName] ;
}

module.exports = model;


