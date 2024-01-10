import { CRUDService } from "../services/CRUDService";
import { Request, Response } from "express";
import { PostschemaValidate } from "../api/postSchema";

// TO use this controller create new instances in your main Express file..
//const postServices = new CRUDService();
//const postController = new CRUDController(postServices);

//Controller + Router
export class CRUDController {
  private postServices: CRUDService;

  constructor(postServices: CRUDService) {
    this.postServices = postServices;
  }

  //*CREATE*
  //Create a new Blog Post from incoming request body
  addpost = async (req: Request, res: Response) => {
    try {
      //Extract data from the request body
      const data = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published,
      };
      //Validation
      const { error, value } = PostschemaValidate.validate(data);
      if (error) {
        return res.status(400).send(error.message);
      }
      //Finally call the postService to create it
      const post = await this.postServices.createPost(value);
      res.status(201).send(post);
    } catch (error) {
      console.error("Error when adding post.", error);
      return res.status(500);
    }
  };
  //*READ*
  getAllPost = async (req: Request, res: Response) => {
    try {
      const allPosts = await this.postServices.getAllPost();
      res.send(allPosts);
    } catch (error) {
      console.error("Unknown error.", error);
      return res.status(500);
    }
  };
  //*READ
  //Return only one post with __id
  getPost = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const post = await this.postServices.getPost(id);
      res.send(post);
    } catch (error) {
      console.error("Unknown error.", error);
      return res.status(500);
    }
  };
  //*UPDATE
  updatePost = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const post = await this.postServices.updatePost(id, req.body);
      res.send(post);
    } catch (error) {
      console.error("Unknown error.", error);
      return res.status(500);
    }
  };
  //*DELETE
  deletePost = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await this.postServices.deletePost(id);
      res.send("post deleted");
    } catch (error) {
      console.error("Unknown error.", error);
      return res.status(500);
    }
  };
}
