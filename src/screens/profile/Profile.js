import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { STYLES, SIZES, COLORS, FONTS } from "../../constants";
import { CustomHeader, Icon, IconType, Row } from "../../components";
import CircleImage from "../../components/CircleImage";

export default function Profile(props) {
  const Entity = ({ icon, type, field, title }) => {
    return (
      <View style={styles.EditContainer}>
        <Row style={[styles.tags, { alignItems: "center" }]}>
          <Icon
            name={icon}
            type={type}
            color={COLORS.gray}
            size={SIZES.twenty}
          />
          <Text
            style={[
              FONTS.mediumFont12,
              { color: COLORS.gray, marginHorizontal: SIZES.ten },
            ]}
          >
            {field}
          </Text>
        </Row>
        <Text style={[FONTS.mediumFont14, styles.Heading]}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow showEditIcon title={"Profile"} />

      <Row style={styles.rowStyle}>
        <CircleImage />
        <View
          style={{ justifyContent: "center", marginHorizontal: SIZES.fifteen }}
        >
          <Text style={[FONTS.boldFont18, { color: COLORS.white }]}>
            Valetudo Beats
          </Text>
          <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
            Canada
          </Text>
        </View>
      </Row>

      <Entity
        icon={"user"}
        type={IconType.SimpleLineIcons}
        field="User Name"
        title={"Jimmy Johns"}
      />
      <Entity
        icon={"email-outline"}
        type={IconType.MaterialCommunityIcons}
        field="User Email"
        title={"Jimmy Johns @ gmail.com"}
      />
      <Entity
        icon={"ios-location-outline"}
        type={IconType.Ionicons}
        field="User Address"
        title={"ABC Street"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    padding: SIZES.fifteen,
    paddingTop: SIZES.twentyFive,
    alignItems: "center",
  },
  EditContainer: {
    paddingHorizontal: SIZES.twenty,
    marginTop: SIZES.fifteen,
  },
  Heading: {
    color: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    paddingBottom: SIZES.ten,
  },
  headertop: {
    marginRight: SIZES.fifteen,
    right: 0,
    position: "absolute",
    alignItems: "center",
  },
  tags: {
    paddingVertical: SIZES.ten,
    color: COLORS.gray,
  },
});
