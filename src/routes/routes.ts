import express from "express";

import { CRUDController } from "../controller/CRUDController";

//Pro pouziti vytvor instanci v main.ts..
export default function createRouter(controller: CRUDController) {
  const router = express.Router();

  //add new post
  router.post("/", controller.addpost);

  //get All posts
  router.get("/", controller.getAllPost);

  //get single post
  router.get("/:id", controller.getPost);

  //update
  router.put("/:id", controller.updatePost);

  //delete
  router.delete("/:id", controller.deletePost);

  return router;
}
