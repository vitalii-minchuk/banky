import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Avatar from "../../components/ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../../hooks/useProfile";
import Loader from "../../components/ui/Loader";

const Header = () => {
  const { isLoading, name } = useProfile();
  const { navigate } = useNavigation();

  if (isLoading) return <Loader />

  return (
    <View className="px-4">
      <TouchableOpacity
        onPress={() => navigate("Profile")}
        className="flex-row items-center space-x-2"
      >
        <Avatar name={name} />
        <Text className="text-gray-800 text-xl font-bold">{name}</Text>
        <Entypo name="chevron-small-right" size={28} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
