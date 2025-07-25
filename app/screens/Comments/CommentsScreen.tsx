import { Typography } from "@/app/theme/Fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { backgroundGray } from "../../theme/Colors";
import { Spacing } from "../../theme/Spacing";

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>💬 Comments will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundGray,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.large,
  },
  text: {
    ...Typography.header,
    textAlign: "center",
  },
});
