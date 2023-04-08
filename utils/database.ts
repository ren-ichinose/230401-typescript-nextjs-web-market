import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error();
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Success: Connected to MongoDB');
  } catch (error) {
    console.log('Failure: Unconnected to MongoDB');
    throw new Error();
  }
};

export default connectDB;
