import { View, ScrollView } from "react-native";
import React, { FC, ReactNode } from "react";

interface ILayout {
  isScrollView?: boolean;
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>
  );
};

export default Layout;
