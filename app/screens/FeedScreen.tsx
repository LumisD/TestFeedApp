import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { PostItem } from "../components/PostItem";
import { Post } from "../models/Post";

const API_URL = "https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts";

export function FeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<Post[]>(API_URL);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 40 }} size="large" />;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostItem post={item} />}
    />
  );
}
