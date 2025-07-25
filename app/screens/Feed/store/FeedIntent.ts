export const LOAD_POSTS = "LoadPosts" as const;
export const LIKE_POST = "LikePost" as const;
export const SAVE_POST = "SavePost" as const;
export const PRESS_COMMENT = "PressComment" as const;

export type FeedIntent =
  | { type: typeof LOAD_POSTS }
  | { type: typeof LIKE_POST; postId: string }
  | { type: typeof SAVE_POST; postId: string }
  | { type: typeof PRESS_COMMENT; postId: string };
