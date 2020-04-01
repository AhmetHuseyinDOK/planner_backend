require('dotenv').config();

const sequelize = require('../dbConnection');

require('../models/');

sequelize.authenticate().then(()=> {
    sequelize.sync({force:true}).then(() => {console.log("successfully synced");sequelize.close();}).catch((err) => console.error(err));
}).catch(err => console.log(err));

