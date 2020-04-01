const Sequelize =  require("sequelize").Sequelize;
const { DB_STRING } = process.env;
const sequelize = new Sequelize(DB_STRING,{
    dialect: 'postgres',
    logging: (log) => {}
});

module.exports = sequelize;