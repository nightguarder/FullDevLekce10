import { Post } from "../api/postSchema";
//Module for handling all CRUD operations
export class CRUDService {
  //*CREATE*
  async createPost(data: any) {
    try {
      const newPost = await Post.create(data);
      return console.log("New Post Created!", newPost);
    } catch (error) {
      console.error(error);
    }
  }
  //*READ*
  async getAllPost() {
    try {
      const posts = await Post.find({});
      return console.log("Found all posts:", posts);
    } catch (error) {
      console.error(error);
    }
  }
  //*READ*
  //Find the Post Using _ObjectId
  async getPost(id: string) {
    try {
      const post = await Post.findById({ _id: id });
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
      const editedPost = await Post.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!editedPost) {
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
      const deletePost = await Post.findByIdAndDelete({ id });
      if (!deletePost) {
        return console.log("Post not found!");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
//Moved to main.tsexport const PostServices = new CRUDService()
