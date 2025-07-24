import { fetchPostsUseCase } from "@/app/domain/usecases/FetchPostsUseCase";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { Post } from "../../domain/models/Post";
import { PostItem } from "./components/PostItem";
import { styles } from "./FeedScreen.styles";

export function FeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPostsUseCase.execute();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loadingIndicator} size="large" />;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostItem post={item} />}
    />
  );
}
