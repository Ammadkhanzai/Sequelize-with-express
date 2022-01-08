const express = require("express");
const router = express.Router();
const  model   = require('../utilities/databaseModule');

router.get('/', async (request,response)=>{
    
    const userModelInstance = model('userModel');

    console.log( model('userModel'));
    const user = await userModelInstance.create({ username: "ammadkhan", email: "ammad@mail.com" });
    console.log("Jane's auto-generated ID:", user.id);
    
    
});


module.exports = router;