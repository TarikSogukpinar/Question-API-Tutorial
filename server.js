const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectDatabase')
const routers = require('./routers');

//Environment Variables
dotenv.config({
    path: "./config/env/config.env",
});

//MongoDb Connection
connectDatabase();


const app = express();
const PORT = process.env.PORT

//Router Middleware
app.use('/api', routers);


app.listen(PORT, () => {
    console.log('App Started');
});
