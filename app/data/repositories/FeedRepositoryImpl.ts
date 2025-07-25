import { Post } from "@/app/domain/models/Post";
import { feedApi } from "../api/feedApi";
import { FeedRepository } from "./FeedRepository";

export class FeedRepositoryImpl implements FeedRepository {
  async getPosts(): Promise<Post[]> {
    return feedApi.fetchPosts();
  }

  async likePost(postId: string): Promise<void> {
    await feedApi.likePost(postId);
  }

  async savePost(postId: string): Promise<void> {
    await feedApi.savePost(postId);
  }

  async commentOnPost(postId: string, comment: string): Promise<void> {
    await feedApi.commentOnPost(postId, comment);
  }
}
