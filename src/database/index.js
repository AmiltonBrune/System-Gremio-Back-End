require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connect database");
  })
  .catch(err => {
    console.error("Erro connect database");
    throw new Error(err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
