import { Post } from "../../domain/models/Post";
import { fetchPosts } from "../api/postsApi";

export class PostRepository {
  async getPosts(): Promise<Post[]> {
    // Could add caching, transformations, error handling here
    return await fetchPosts();
  }
}

export const postRepository = new PostRepository();
