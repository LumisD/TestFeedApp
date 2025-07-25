import { fetchPostsUseCase } from "@/app/domain/usecases/FetchPostsUseCase";
import { FeedEffect } from "./FeedEffect";
import { LOAD_POSTS } from "./FeedIntent";
import { FeedState } from "./FeedState";
import { FeedStore } from "./FeedStore";

export async function handleFeedIntent(
  intent: any,
  get: () => { state: FeedState },
  set: (fn: (store: FeedStore) => Partial<FeedStore>) => void
): Promise<
  | { handled: true; newState: FeedState; effect?: FeedEffect }
  | { handled: false }
> {
  switch (intent.type) {
    case LOAD_POSTS: {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          isLoading: true,
          error: null,
        },
      }));

      try {
        const posts = await fetchPostsUseCase.execute();
        return {
          handled: true,
          newState: {
            ...get().state,
            posts,
            isLoading: false,
            error: null,
          },
        };
      } catch (e) {
        console.error("Failed to load posts", e);
        return {
          handled: true,
          newState: {
            ...get().state,
            posts: [],
            isLoading: false,
            error: "Failed to load posts",
          },
        };
      }
    }

    default:
      return { handled: false };
  }
}
