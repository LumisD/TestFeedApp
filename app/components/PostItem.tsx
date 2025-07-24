import moment from "moment";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../models/Post";
import { FallbackImage } from "./FallbackImage";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.location}>{post.location}</Text>
        </View>
      </View>

      {/* Image */}
      <FallbackImage
        uri={post.image}
        fallbackUri="https://picsum.photos/640/480"
        style={styles.image}
      />

      {/* Interaction counts */}
      <View style={styles.interaction}>
        <Text>
          ❤️ {post.likes} 💬 {post.comments} 💾 {post.saved ? "Saved" : ""}
        </Text>
      </View>

      {/* Description */}
      <Text style={styles.caption}>
        <Text style={styles.name}>{post.name} </Text>
        {post.description}
      </Text>

      {/* Created at */}
      <Text style={styles.timestamp}>{moment(post.createdAt).fromNow()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: "#ddd" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: "bold" },
  location: { color: "#666" },
  image: { width: "100%", height: 250, marginVertical: 10 },
  interaction: { flexDirection: "row", marginBottom: 4 },
  caption: { marginBottom: 4 },
  timestamp: { color: "#888", fontSize: 12 },
});
