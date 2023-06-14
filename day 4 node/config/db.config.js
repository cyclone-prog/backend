import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
//mdbc

export const dbConnection = async () => {
  const connection = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
  });
  console.log("mongodb connected", connection.connection.host);
};
 