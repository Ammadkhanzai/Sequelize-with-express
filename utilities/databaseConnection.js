const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });
 

exports.dbConnect = async () => { 

  let connectionInstance = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host:  process.env.HOST,
    dialect: 'mysql'
  });

  let connectionPromise = new Promise(async (resolve , reject)=>{
    try {
      await connectionInstance.authenticate();
      console.log('Connection has been established successfully.');
      resolve(connectionInstance);
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      reject(error);
    }
  });

  return connectionPromise.then((connectionInstance)=>{ return connectionInstance },(error)=>{ return error })
}

