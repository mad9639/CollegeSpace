const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://madhursharma:Madhur@123@cluster0.2nuzgcq.mongodb.net/?retryWrites=true&w=majority",  {useNewUrlParser: true});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;