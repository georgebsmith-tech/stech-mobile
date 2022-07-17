import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import { Home } from "../../../screens";
const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator
      //   screenOptions={({ route }) => (
      //     {
      //       tabBarIcon:
      //     }
      // )}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 70,
          //   paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(23, 30, 27, 1)",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
        showLabel: true,
        style: { backgroundColor: "red" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../../assets/images/home-active.png")}
              />
            ) : (
              <Image
                source={require("../../../../assets/images/home-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../../assets/images/reports-active.png")}
              />
            ) : (
              <Image
                source={require("../../../../assets/images/reports-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../../assets/images/profile-active.png")}
              />
            ) : (
              <Image
                source={require("../../../../assets/images/profile-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../../assets/images/more-active.png")}
              />
            ) : (
              <Image
                source={require("../../../../assets/images/more-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "#fff" },
        }}
      />
      {/* <UserTab.Screen
        name="Chat"
        component={Chats}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../assets/images/chats-active.png")}
              />
            ) : (
              <Image
                source={require("../../../assets/images/chats-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "rgba(14,14,14,1)" },
        }}
      />
      <UserTab.Screen
        name="Pay Bills"
        component={TopUp}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../assets/images/paybills-inactive.png")}
              />
            ) : (
              <Image
                source={require("../../../assets/images/paybills-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "rgba(14,14,14,1)" },
        }}
      />
      <UserTab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../../assets/images/settings-active.png")}
              />
            ) : (
              <Image
                source={require("../../../assets/images/settings-inactive.png")}
              />
            ),
          tabBarLabelStyle: { color: "rgba(14,14,14,1)" },
        }}
      /> */}
    </Tab.Navigator>
  );
};
