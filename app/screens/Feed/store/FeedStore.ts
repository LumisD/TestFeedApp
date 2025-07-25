import { createStore } from "zustand";
import { FeedEffect } from "./FeedEffect";
import { FeedIntent } from "./FeedIntent";
import { feedReducer } from "./FeedReducer";
import { FeedState, initialFeedState } from "./FeedState";
import { handleFeedIntent } from "./handleFeedIntent";

export interface FeedStore {
  state: FeedState;
  currentEffect: FeedEffect | null;
  processIntent: (intent: FeedIntent) => void;
  consumeEffect: () => void;
}

export const createFeedStore = () => {
  return createStore<FeedStore>((set, get) => ({
    state: initialFeedState,
    currentEffect: null,

    processIntent: async (intent: FeedIntent) => {
      const handled = await handleFeedIntent(intent, get, set);
      if (handled?.handled) {
        set({ state: handled.newState });
        if (handled.effect) {
          set({ currentEffect: handled.effect });
        }
        return;
      }

      const { newState, effect } = feedReducer(get().state, intent);
      set({ state: newState });

      if (effect) {
        set({ currentEffect: effect });
      }
    },

    consumeEffect: () => set({ currentEffect: null }),
  }));
};
