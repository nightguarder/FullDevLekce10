import express from "express";
import helmet from "helmet";
import cors from "cors";
import MongoConn from "./services/MongoConnect";
import Router from "./routes/routes";
import errorHandler from "./middleware/exceptiions";

//Dotenv
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

async function run() {
  //Express config
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  //DB connection
  try {
    await MongoConn.connectDB();
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Connection to MongoDB failed.", error);
    process.exit(1); //Exiting now
  }

  //Else
  // Start the express app
  app.listen(PORT, () => {
    // Log a message when the server is running
    console.log(`Server is running on port http://${HOST}:${PORT}.`);
  });

  //Default endpoint
  app.get("/", (req, res) => {
    res.json({ message: "Default '/' ExpressJS endpoint" });
  });

  //Routing
  app.use("/api/v1/posts", Router);

  //Middleware
  app.use(errorHandler);
}

run();
