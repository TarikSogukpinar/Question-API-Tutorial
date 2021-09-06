const express = require('express');
const dotenv = require('dotenv');
const questions = require('./routers/questions');
const auth = require('./routers/auth');


//Environment Variables
dotenv.config({
    path: "./config/env/config.env"
});

const app = express();
const PORT = process.env.PORT

//Router Middleware
app.use('/api/questions', questions);
app.use('/api/auth', auth);


app.listen(PORT, () => {
    console.log('App Started');
});
