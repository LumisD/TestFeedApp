export const NAVIGATE_TO_COMMENTS = "NavigateToComments" as const;
export const NAVIGATE_TO_PROFILE = "NavigateToProfile" as const;
export const NAVIGATE_TO_POST_DETAILS = "NavigateToPostDetails" as const;

export type FeedEffect =
  | {
      type: typeof NAVIGATE_TO_COMMENTS;
      postId: string;
    }
  | {
      type: typeof NAVIGATE_TO_PROFILE;
      userId: string;
    };
