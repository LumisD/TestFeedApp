import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import { Post } from "../../../domain/models/Post";
import { styles } from "../FeedScreen.styles";
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

      {/* Content */}
      <FallbackImage
        uri={post.image}
        fallbackUri="https://picsum.photos/640/480"
        style={styles.image}
      />

      {/* Interaction Section */}
      <View style={styles.interaction}>
        <Text>
          ❤️ {post.likes} 💬 {post.comments} 💾 {post.saved ? "Saved" : ""}
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerName}>{post.name}</Text>
        <Text style={styles.footerDescription}>{post.description}</Text>
        <Text style={styles.footerTimestamp}>
          {moment(post.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
}
