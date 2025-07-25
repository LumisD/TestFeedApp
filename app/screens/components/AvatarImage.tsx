import React, { useState } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

type Props = {
  uri: string;
  style?: StyleProp<ImageStyle>;
};

export function AvatarImage({ uri, style }: Props) {
  const [error, setError] = useState(false);
  const fallback = require("../../../assets/images/avatar-placeholder.png");

  return (
    <Image
      source={error || !uri ? fallback : { uri }}
      style={style}
      onError={() => setError(true)}
    />
  );
}
