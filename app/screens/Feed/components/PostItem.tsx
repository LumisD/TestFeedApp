import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Post } from "../../../domain/models/Post";
import { AvatarImage } from "../../components/AvatarImage";
import { FallbackImage } from "../../components/FallbackImage";
import { styles } from "../FeedScreen.styles";

type Props = {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onSave: (postId: string) => void;
};

export function PostItem({ post, onLike, onComment, onSave }: Props) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <AvatarImage uri={post.avatar} style={styles.avatar} />
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
        <Pressable onPress={() => onLike(post.id)}>
          {/* <Text style={styles.icon}>{post.liked ? "❤️" : "🤍"}</Text> */}
          <FontAwesome
            name={post.liked ? "heart" : "heart-o"}
            size={20}
            color={post.liked ? "red" : "gray"}
          />
        </Pressable>
        <Text style={styles.count}>{post.likes}</Text>

        <Pressable onPress={() => onComment(post.id)}>
          <Text style={styles.icon}>💬</Text>
        </Pressable>
        <Text style={styles.count}>{post.comments}</Text>

        <Pressable onPress={() => onSave(post.id)}>
          {/* <Text style={styles.icon}>{post.saved ? "💾" : "📁"}</Text> */}
          <FontAwesome
            name={post.saved ? "bookmark" : "bookmark-o"}
            size={20}
            color={post.saved ? "blue" : "gray"}
          />
        </Pressable>
        {/* <Text style={styles.count}>{post.saved ? "Saved" : ""}</Text> */}
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
