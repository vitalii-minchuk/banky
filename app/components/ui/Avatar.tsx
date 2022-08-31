import { View, Text } from "react-native";
import React, { FC } from "react";

interface IAvatar {
  name?: string | null;
  size?: "small" | "large";
}
const Avatar: FC<IAvatar> = ({ name, size = "small" }) => {
  const isSmall = size === "small";

  return (
    <View
      className={`${
        isSmall ? "w-9 h-9" : "w-12 h-12"
      } rounded-full bg-gray-400 items-center justify-center`}
    >
      <Text
        className={`${isSmall ? "text-xl" : "text-2xl"} text-white font-bold`}
      >
        {name?.slice(0, 1)}
      </Text>
    </View>
  );
};

export default Avatar;
