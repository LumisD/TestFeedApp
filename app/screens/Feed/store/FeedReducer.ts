import {
  FeedEffect,
  NAVIGATE_TO_COMMENTS,
  NAVIGATE_TO_PROFILE,
} from "./FeedEffect";
import {
  FeedIntent,
  LIKE_POST,
  PRESS_COMMENT,
  PRESS_PROFILE,
  SAVE_POST,
} from "./FeedIntent";
import { FeedState } from "./FeedState";

export const feedReducer = (
  state: FeedState,
  intent: FeedIntent
): { newState: FeedState; effect?: FeedEffect } => {
  console.log("Feed reducer started with intent:", intent);

  switch (intent.type) {
    case LIKE_POST: {
      const updatedPosts = state.posts.map((post) =>
        post.id === intent.postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      );

      return {
        newState: {
          ...state,
          posts: updatedPosts,
        },
      };
    }

    case SAVE_POST: {
      const updatedPosts = state.posts.map((post) =>
        post.id === intent.postId ? { ...post, saved: !post.saved } : post
      );

      return {
        newState: {
          ...state,
          posts: updatedPosts,
        },
      };
    }

    case PRESS_COMMENT: {
      return {
        newState: state,
        effect: {
          type: NAVIGATE_TO_COMMENTS,
          postId: intent.postId,
        },
      };
    }

    case PRESS_PROFILE: {
      return {
        newState: state,
        effect: {
          type: NAVIGATE_TO_PROFILE,
          userId: intent.userId,
        },
      };
    }

    default:
      console.warn("Feed reducer: unhandled intent", intent);
      return { newState: state };
  }
};
