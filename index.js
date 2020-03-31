require('dotenv').config();
require('express-async-errors');
const port =  process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const express = require('express');
const app =  express();
const AuthRouter = require('./routes/auth');
const InfoRouter = require('./routes/info');
const ErrorHandlerMiddleware  = require('./middlewares/error').errorHandler;
const UserService = require('./services/user');

app.use(express.json());
app.get("/",(req,res) => res.send("hello world"));
app.use(AuthRouter);
app.use(InfoRouter);
app.use(ErrorHandlerMiddleware);

app.listen(port,host,()=>{
    console.log(`listening at ${host}:${port}`);
})