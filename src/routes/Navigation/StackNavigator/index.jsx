import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DetailedReport,
  Home,
  SignIn,
  SignUp,
  Splash,
  Success,
} from "../../../screens";
import { BottomTabNav } from "../..";

const Stack = createStackNavigator();

export function Navigation() {
  const screens = [
    { name: "Splash", component: Splash },
    { name: "SignIn", component: SignIn },
    { name: "Home", component: BottomTabNav },

    { name: "SignUp", component: SignUp },
    { name: "DetailedReport", component: DetailedReport },
    { name: "Success", component: Success },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {screens.map((screen, idx) => (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
            key={idx}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
