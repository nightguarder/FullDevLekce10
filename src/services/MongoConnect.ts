import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://";

//Local DB connection instance
export default class MongoConn {
  static async connectDB() {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    return client;
  }
}
