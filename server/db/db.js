import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const conn = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nkcltxi.mongodb.net/?retryWrites=true&w=majority`
  try {
    mongoose.connect(conn, { useNewUrlParser: true});
    console.log(`Database connected successfully.`);
  } catch (error) {
    console.log(`Error while connecting to database`,error);
  }
}

export default Connection;


