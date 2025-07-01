const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to', db.connection.name);
  } catch (error) {
    console.log('❌ Mongo connection error:', error);
  }
};

module.exports = connectDB;