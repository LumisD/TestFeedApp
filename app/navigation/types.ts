export const SCREENS = {
  tabs: "tabs",
  feed: "feed",
  profile: "profile",
  comments: "comments",
} as const;

export type RootStackParamList = {
  tabs: undefined;
  comments: { postId: string };
  profile: { userId?: string };
};
