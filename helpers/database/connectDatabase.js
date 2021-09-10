const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("MongoDb Connection Successfully :", process.env.PORT);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
