import { RootStackParamList, SCREENS } from "@/app/navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  FeedEffect,
  NAVIGATE_TO_COMMENTS,
  NAVIGATE_TO_PROFILE,
} from "./FeedEffect";

export function handleFeedEffects(
  currentEffect: FeedEffect,
  navigation: StackNavigationProp<RootStackParamList>
) {
  switch (currentEffect.type) {
    case NAVIGATE_TO_COMMENTS: {
      navigation.navigate(SCREENS.comments, {
        postId: currentEffect.postId,
      });
      break;
    }

    case NAVIGATE_TO_PROFILE: {
      navigation.navigate(SCREENS.profile, {
        userId: currentEffect.userId,
      });
      break;
    }

    default:
      console.warn("Unhandled FeedEffect:", currentEffect);
  }
}
