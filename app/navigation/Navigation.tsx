import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";
import Payments from "../screens/payments/Payments";
import Profile from "../screens/profile/Profile";
import Services from "../screens/services/Services";
import Support from "../screens/support/Support";
import More from "../screens/more/More";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="More" component={More} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
