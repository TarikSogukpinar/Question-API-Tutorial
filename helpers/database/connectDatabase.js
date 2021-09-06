const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
        .then(() => {
            console.log('MongoDb Connection Successfull !');
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = connectDatabase;