import express from "express";
import helmet from "helmet";
import cors from "cors";
import { MongoConn } from "./services/MongoConnect";
import errorHandler from "./middleware/exceptions";
import { CRUDService } from "./services/CRUDService";
import { CRUDController } from "./controller/CRUDController";
import createRouter from "./routes/routes";
import { Post } from "./api/postSchema";
import { Collection } from "mongoose";

//Dotenv
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

//Main function...
async function run() {
  //Express config
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  //DB connection
  let mongo;
  try {
    mongo = await MongoConn.connectDB();
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Connection to MongoDB failed.", error);
    process.exit(1); //Exiting now
  }

  // Get the 'blog' collection
  const db = mongo.db("blog");
  const collection = db.collection("posts");
  //Else
  //Services & Controllers instance
  const PostServices = new CRUDService(collection);
  const postController = new CRUDController(PostServices);

  //Routing
  const postRouter = await createRouter(postController);
  app.use("/api/v1/posts", postRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}.`);
  });

  //Middleware
  app.use(errorHandler);
}

run();
