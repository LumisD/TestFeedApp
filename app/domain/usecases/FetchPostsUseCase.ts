import { postRepository } from "@/app/data/repositories/PostRepository";
import { Post } from "../models/Post";

export class FetchPostsUseCase {
  async execute(): Promise<Post[]> {
    return postRepository.getPosts();
  }
}

export const fetchPostsUseCase = new FetchPostsUseCase();
