require('dotenv').config();
require('express-async-errors');
const port =  process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const express = require('express');
const app =  express();
const PlanRouter = require('./routes/plan');
const sequelize = require('./dbConnection');
const cors = require('cors');
require('./models');
app.use(cors());
app.use(express.json());
app.get("/",(req,res) => res.send("hello world"));
app.use(PlanRouter);

sequelize.authenticate().then( () => {
    console.log('connected to db');
    app.listen(port,host,()=>{
        console.log(`listening at ${host}:${port}`);
    })
})
