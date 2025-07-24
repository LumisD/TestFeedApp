import { Typography } from "@/app/theme/Fonts";
import { StyleSheet } from "react-native";
import { backgroundGray, borderGray } from "../../theme/Colors";
import { Spacing } from "../../theme/Spacing";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: backgroundGray,
    padding: Spacing.large,
    borderBottomWidth: 1,
    borderColor: borderGray,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.medium,
  },
  avatar: {
    width: Spacing.avatarSize,
    height: Spacing.avatarSize,
    borderRadius: Spacing.avatarSize / 2,
    marginRight: Spacing.large,
  },
  image: {
    width: "100%",
    height: Spacing.imageHeight,
    marginVertical: Spacing.large,
  },
  interaction: {
    flexDirection: "row",
    marginBottom: Spacing.small,
  },
  footer: {
    backgroundColor: backgroundGray,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.medium,
    borderTopWidth: 1,
    borderTopColor: borderGray,
  },
  loadingIndicator: {
    marginTop: 40,
  },
  name: {
    ...Typography.header,
  },
  location: {
    ...Typography.location,
  },
  footerName: {
    ...Typography.footerName,
    marginBottom: Spacing.small,
  },
  footerDescription: {
    ...Typography.footerDescription,
    marginBottom: Spacing.medium,
  },
  footerTimestamp: {
    ...Typography.footerTimestamp,
  },
});
