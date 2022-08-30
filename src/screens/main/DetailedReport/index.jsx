import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../config";
import { Button, Circle, Input } from "../../../components";
import { getDate } from "../../../utils/helpers/dateAndTime/getDate";
import { toWhen } from "../../../utils/helpers/dateAndTime/toWhen";

export function DetailedReport({ navigation, route }) {
  console.log(route);
  const { report } = route.params;

  return (
    <View
      style={{
        backgroundColor: "#EDFFF7",
        minHeight: SIZES.height,
        padding: 16,
        paddingTop: 70
      }}
    >
      <View>
        <Text
          style={{
            color: COLORS.grey1,
            fontWeight: "600",
            fontSize: 18,
            textAlign: "center"
          }}
        >
          Medical Report
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 30,
            borderRadius: 10,
            borderBottomWidth: 1,
            borderColor: COLORS.grey1,
            padding: 15
          }}
        >
          <Text
            style={{
              color: COLORS.grey1,
              fontWeight: "600",
              fontSize: 16
            }}
          >
            Student's Profile
          </Text>
          <View style={{ marginTop: 20 }}>
            {[
              {
                title: "Name",
                value: report.student.name
              },
              { title: "Mat. No.", value: report.student.matNo },
              { title: "Contact", value: report.student.phone },

              { title: "Dept", value: report.student.dept },
              { title: "Gender", value: report.student.gender }
            ].map((item, idx) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10
                }}
              >
                <Text style={{ color: "rgba(111, 121, 117, 1)" }}>
                  {item.title}:
                </Text>
                <Text style={{ color: COLORS.grey1, fontWeight: "700" }}>
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 15, padding: 15 }}>
          <Text
            style={{
              color: COLORS.grey1,
              fontWeight: "600",
              fontSize: 16
            }}
          >
            Report
          </Text>

          <Text style={{ fontSize: 12, marginTop: 10, color: COLORS.grey4 }}>
            {report.report}
          </Text>
          <View style={{ marginTop: 20 }}>
            {[
              { title: "Hospital", value: "St. Batpist" },
              {
                title: "Reported By.",
                value:
                  report?.addedBy?.lastName + " " + report?.addedBy?.firstName
              },
              {
                title: "Reported On.",
                value: getDate(report.createdAt)
              },

              { title: "Phone", value: report.addedBy.phone }

              // { title: "Email", value: report.addedBy.email }
            ].map((item, idx) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10
                }}
              >
                <Text style={{ color: "rgba(111, 121, 117, 1)" }}>
                  {item.title}:
                </Text>
                <Text
                  style={{
                    color: COLORS.grey1,
                    fontWeight: "500",
                    fontSize: 13
                  }}
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}
