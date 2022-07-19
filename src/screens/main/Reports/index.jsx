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

export function Reports({ navigation }) {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",

          marginBottom: 40
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "rgba(25, 32, 29, 1)"
          }}
        >
          All Reports
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {reports.map((report, idx) => (
              <TouchableOpacity
                key={idx}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 24
                }}
                onPress={() =>
                  navigation.push(screenRoutes.DetailedReport, { report })
                }
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
                      {report?.student?.name[0]}
                    </Text>
                  </Circle>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: COLORS.grey1, fontWeight: "700" }}>
                      {report?.student?.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: "rgba(0,56,34,0.7)" }}>
                      {report?.student?.matNo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{ textAlign: "right", fontSize: 13 }}>
                    {report?.student?.dept}
                  </Text>
                  <Text
                    style={{
                      textAlign: "right",
                      fontSize: 10,
                      color: COLORS.grey2
                    }}
                  >
                    {getDate(report?.createdAt)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
