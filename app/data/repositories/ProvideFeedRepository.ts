import { FeedRepository } from "./FeedRepository";
import { FeedRepositoryImpl } from "./FeedRepositoryImpl";

export function provideFeedRepository(): FeedRepository {
  return new FeedRepositoryImpl();
}
