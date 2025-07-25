import { AvatarImage } from "@/app/screens/components/AvatarImage";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("AvatarImage", () => {
  it("renders image with provided uri", () => {
    const { getByTestId } = render(
      <AvatarImage uri="https://example.com/avatar.png" />
    );
    const image = getByTestId("avatar-image");
    expect(image.props.source.uri).toBe("https://example.com/avatar.png");
  });

  it("shows fallback image on error", () => {
    const { getByTestId } = render(<AvatarImage uri="invalid-url" />);
    const image = getByTestId("avatar-image");

    fireEvent(image, "error");

    expect(image.props.source).toBe(
      require("../../../assets/images/avatar-placeholder.png")
    );
  });
});
