const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: "../config.env" });

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection maded with DATABSE 🚀");
  })
  .catch((err) => {
    console.log(err);
  });
