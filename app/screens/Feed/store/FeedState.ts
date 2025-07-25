import { Post } from "@/app/domain/models/Post";

export interface FeedState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

export const initialFeedState: FeedState = {
  posts: [],
  isLoading: false,
  error: null,
};
