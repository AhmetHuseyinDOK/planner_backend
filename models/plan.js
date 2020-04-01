const Sequelize =  require('sequelize');
const sequelize = require('../dbConnection');

const Plan =  sequelize.define('Plan',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true  
    },
    name:{
        type: Sequelize.STRING
    },
    range:{
        type: Sequelize.JSON
    },
    dayRange:{
        type: Sequelize.JSON
    }
});

module.exports = Plan;