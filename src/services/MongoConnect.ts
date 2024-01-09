import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongo_link = process.env.MONGO_URL || "mongodb://";

//Local DB connection instance
export default class MongoConn {
  static connectDB() {
    return new MongoClient(mongo_link);
  }
}
