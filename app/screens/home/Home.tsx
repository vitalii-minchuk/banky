import { View, Text, SafeAreaView } from "react-native";
import React, { FC } from "react";
import Header from "./Header";

const Home: FC = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
