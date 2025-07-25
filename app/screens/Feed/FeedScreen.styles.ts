import { Typography } from "@/app/theme/Fonts";
import { StyleSheet } from "react-native";
import { backgroundGray, borderGray, red } from "../../theme/Colors";
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
    alignItems: "center",
    columnGap: Spacing.medium,
    marginBottom: Spacing.small,
  },

  icon: {
    fontSize: 16,
  },

  count: {
    fontSize: 14,
    marginRight: Spacing.large,
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

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.large,
  },

  errorText: {
    ...Typography.header,
    color: red,
    marginBottom: Spacing.large,
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
