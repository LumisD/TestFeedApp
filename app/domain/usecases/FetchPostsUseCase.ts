import { FeedRepository } from "@/app/data/repositories/FeedRepository";
import { provideFeedRepository } from "@/app/data/repositories/ProvideFeedRepository";
import { Post } from "../models/Post";

export class FetchPostsUseCase {
  constructor(private repository: FeedRepository) {}

  async execute(): Promise<Post[]> {
    return this.repository.getPosts();
  }
}

export const fetchPostsUseCase = new FetchPostsUseCase(provideFeedRepository());
