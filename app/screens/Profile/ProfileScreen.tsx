import { backgroundGray, textSecondary } from "@/app/theme/Colors";
import { Typography } from "@/app/theme/Fonts";
import { Spacing } from "@/app/theme/Spacing";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile header with avatar and name */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/100" }}
          style={styles.avatar}
        />
        <Text style={Typography.header}>dummy_user</Text>
      </View>

      {/* Profile stats */}
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={Typography.header}>123</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={Typography.header}>456</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={Typography.header}>789</Text>
          <Text>Following</Text>
        </View>
      </View>

      {/* Bio */}
      <Text style={styles.bio}>
        This is a dummy bio for the profile screen.
      </Text>

      {/* Edit Profile button */}
      <Button title="Edit Profile" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.large,
    backgroundColor: backgroundGray,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.medium,
    marginBottom: Spacing.large,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: Spacing.medium,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Spacing.large,
  },
  statItem: {
    alignItems: "center",
  },
  bio: {
    marginBottom: Spacing.large,
    fontStyle: "italic",
    color: textSecondary,
  },
});
