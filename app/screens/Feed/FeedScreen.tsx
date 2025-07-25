import { RootStackParamList } from "@/app/navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { useStore } from "zustand";
import { PostItem } from "./components/PostItem";
import { styles } from "./FeedScreen.styles";
import {
  LIKE_POST,
  LOAD_POSTS,
  PRESS_COMMENT,
  SAVE_POST,
} from "./store/FeedIntent";
import { createFeedStore } from "./store/FeedStore";
import { handleFeedEffects } from "./store/handleFeedEffects";

export function FeedScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const store = useMemo(() => createFeedStore(), []);

  const state = useStore(store, (s) => s.state);
  const processIntent = useStore(store, (s) => s.processIntent);
  const currentEffect = useStore(store, (s) => s.currentEffect);
  const consumeEffect = useStore(store, (s) => s.consumeEffect);

  useEffect(() => {
    processIntent({ type: LOAD_POSTS });
  }, [processIntent]);

  useEffect(() => {
    if (!currentEffect) return;
    handleFeedEffects(currentEffect, navigation);
    consumeEffect();
  }, [currentEffect, consumeEffect]);

  if (state.isLoading && state.posts.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator style={styles.loadingIndicator} size="large" />
      </View>
    );
  }

  if (state.error && state.posts.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>
          {state.error || "Something went wrong."}
        </Text>
        <Button
          title="Try Again"
          onPress={() => processIntent({ type: LOAD_POSTS })}
        />
      </View>
    );
  }

  return (
    <FlatList
      data={state.posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PostItem
          post={item}
          onLike={(postId) => processIntent({ type: LIKE_POST, postId })}
          onComment={(postId) => processIntent({ type: PRESS_COMMENT, postId })}
          onSave={(postId) => processIntent({ type: SAVE_POST, postId })}
        />
      )}
    />
  );
}
