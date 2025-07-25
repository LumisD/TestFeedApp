import { Post } from "@/app/domain/models/Post";

export interface FeedRepository {
  getPosts(): Promise<Post[]>;
  likePost(postId: string): Promise<void>;
  savePost(postId: string): Promise<void>;
  commentOnPost(postId: string, comment: string): Promise<void>;
}
