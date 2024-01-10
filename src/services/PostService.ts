//Mongo Module for handling all CRUD operations
import { ObjectId } from "mongodb";

export class PostService {
  private collection: any;

  constructor(collection: any) {
    this.collection = collection;
  }
  //*CREATE*
  async createPost(data: any) {
    try {
      const newPost = await this.collection.insertOne(data);
      return console.log("New Post Created!", newPost);
    } catch (error) {
      console.error(error);
    }
  }
  //*READ*
  async getAllPost() {
    try {
      const posts = await this.collection.find({}).toArray();
      return console.log("Found all posts:", posts);
    } catch (error) {
      console.error(error);
    }
  }
  //*READ*
  //Find the Post Using _ObjectId
  async getPost(id: string) {
    try {
      const post = await this.collection.findOne({ _id: new ObjectId(id) });
      if (!post) {
        return console.log("Post not found!", post);
      }
      return post;
    } catch (error) {
      console.error(error);
    }
  }
  //*UPDATE*
  async updatePost(id: string, data: any) {
    try {
      //Use id of object in db
      //new:true updated document is returned after the update
      const editedPost = await this.collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        {
          returnOriginal: false,
        }
      );
      if (!editedPost.value) {
        return console.log("Cannot edit post");
      }
      console.log("Updated Post:", editedPost);
      return editedPost;
    } catch (error) {
      console.error(error);
    }
  }
  //*DELETE*
  async deletePost(id: string) {
    try {
      const deletePost = await this.collection.findOneAndDelete({
        _id: new ObjectId(id),
      });
      if (!deletePost.value) {
        return console.log("Post not found!");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
////Moved to main.ts export const PostServices = new CRUDService()
