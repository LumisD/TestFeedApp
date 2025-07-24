import React, { useState } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

type FallbackImageProps = {
  uri: string;
  fallbackUri: string;
  style?: StyleProp<ImageStyle>;
};

export function FallbackImage({ uri, fallbackUri, style }: FallbackImageProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      source={{ uri: error ? fallbackUri : uri }}
      style={style}
      onError={() => setError(true)}
    />
  );
}
