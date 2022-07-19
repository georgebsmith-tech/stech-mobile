import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { COLORS, SIZES } from "../../../config";
import { Button, Circle, Input } from "../../../components";
import { screenRoutes } from "../../../routes";
import { UserContext } from "../../../contexts";
import { getProtectedData } from "../../../utils/services/getServices";
import { getDate } from "../../../utils/helpers/dateAndTime/getDate";

export function Profile({ navigation }) {
  const { user } = useContext(UserContext);
  console.log(user);
  const [reports, setReports] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async function getReports() {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        console.log("here");
        const data = await getProtectedData("/reports", {}, token);
        console.log(data);
        setReports(data.data.reports);
        setTotal(data.data.count);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (!user.firstName) {
    return (
      <View
        style={{
          height: SIZES.height,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: "#fff",
        minHeight: SIZES.height,
        padding: 16,
        paddingTop: 70
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text style={{ fontSize: 16, color: "#19201D", fontWeight: "600" }}>
          Profile
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "rgba(25, 32, 29, 1)",
            alignItems: "center",
            padding: 20,
            borderRadius: 6
          }}
        >
          <Circle
            bg="rgba(34, 41, 38, 1)"
            size={72}
            style={{ marginBottom: 16 }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600"
              }}
            >
              {user.firstName[0] + user.lastName[0]}
            </Text>
          </Circle>
          <Text
            style={{
              color: "#fff",
              marginBottom: 4,
              fontWeight: "600",
              fontSize: 16
            }}
          >
            {`${user.firstName} ${user.lastName}`}
          </Text>
          <Text
            style={{
              color: "#fff",
              marginBottom: 4,
              fontWeight: "400",
              fontSize: 12
            }}
          >
            Account details
          </Text>
        </View>
        <View style={{ marginTop: 17 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {[
              {
                title: "Change Password",
                text: "Essential bank information",
                screen: screenRoutes.ChangePassword
              },
              {
                title: "Edit Profile",
                text: "Modify your user profile",
                screen: screenRoutes.AccountDetails
              }
            ].map((tab, idx) => (
              <TouchableOpacity
                key={idx}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  backgroundColor: "#F9F9F9",
                  padding: 21
                }}
                onPress={() => navigation.push(tab.screen)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Circle size={48} bg="rgba(215, 223, 219, 1)">
                    <Text
                      style={{
                        color: COLORS.grey1,
                        fontWeight: "900",
                        textAlign: "center"
                      }}
                    >
                      {tab.title[0]}
                    </Text>
                  </Circle>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: COLORS.grey1, fontWeight: "700" }}>
                      {tab.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: "rgba(0,56,34,0.7)" }}>
                      {tab.text}
                    </Text>
                  </View>
                </View>
                <View></View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 150 }} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
