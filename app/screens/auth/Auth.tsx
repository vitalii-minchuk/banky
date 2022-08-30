import {
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React, { FC, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../components/ui/Loader";
import Field from "../../components/ui/Field";

interface IData {
  email: string;
  password: string;
}
const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const { isLoading, register, login } = useAuth();

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }
    setData({} as IData);
  };

  return (
    <SafeAreaView>
      <View className="justify-center w-full h-full">
        <View className="w-9/12 mx-auto">
          <Text className="text-center test-gray-700 text-2xl font-bold mb-2">
            {isReg ? "Sign Up" : "Sign In"}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                onChange={(val) => setData({ ...data, email: val })}
                value={data.email}
                placeholder="Enter your email"
              />
              <Field
                onChange={(val) => setData({ ...data, password: val })}
                value={data.password}
                placeholder="Enter your password"
                isSecure={true}
              />
              <TouchableHighlight
                onPress={authHandler}
                activeOpacity={0.5}
                underlayColor="#FBBF24"
                style={{
                  backgroundColor: "#FBBF24",
                  padding: 10,
                  borderRadius: 12,
                  marginTop: 10,
                }}
              >
                <Text className="text-center text-lg">Let's go</Text>
              </TouchableHighlight>
              <Pressable className="mt-4" onPress={() => setIsReg(!isReg)}>
                <Text className="text-gray-800 opacity-50 text-right text-sm">
                  {isReg ? "Login" : "Register"}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
