const Sequelize =  require('sequelize');
const sequelize = require('../dbConnection');

const Attendee =  sequelize.define('Attendee',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true  
    },
    name:{
        type: Sequelize.STRING
    },
    ranges:{
        type: Sequelize.JSON
    }
});

module.exports = Attendee;