import { Platform, StyleSheet, TextStyle } from "react-native";
import { locationGray, textMuted, textPrimary, textSecondary } from "./Colors"; // adjust path if needed

const baseFont = Platform.select({
  ios: "System",
  android: "sans-serif",
});

export const Typography = StyleSheet.create({
  header: {
    fontFamily: baseFont,
    fontWeight: "bold",
    color: textPrimary,
    fontSize: 18,
  } as TextStyle,

  location: {
    fontFamily: baseFont,
    color: locationGray,
    fontSize: 14,
  } as TextStyle,

  footerName: {
    fontFamily: baseFont,
    fontWeight: "bold",
    color: textPrimary,
    fontSize: 14,
  } as TextStyle,

  footerDescription: {
    fontFamily: baseFont,
    color: textSecondary,
    fontSize: 14,
  } as TextStyle,

  footerTimestamp: {
    fontFamily: baseFont,
    color: textMuted,
    fontSize: 12,
  } as TextStyle,
});
