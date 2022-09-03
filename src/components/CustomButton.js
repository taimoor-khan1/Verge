import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, IconType, Card } from "./index";
import { COLORS, FONTS, SIZES } from "../constants";

export default function CustomButton({
  label,
  onPress,
  style,
  btnstyle,
  icon,
  isBrightButton,
  disabled,
  ...props
}) {
  return (
    <Card style={[style, { borderRadius: 5 }]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.85}
        onPress={onPress}
        style={[
          styles.btnstyle,
          styles.loginBtnBg,
          {
            justifyContent: icon ? "space-between" : "center",
            backgroundColor: isBrightButton ? COLORS.white : COLORS.lightPurple,
          },
        ]}
      >
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: isBrightButton ? COLORS.primary : COLORS.white,
              textAlign: "center",
            },
          ]}
        >
          {label}
        </Text>

        {icon ? (
          <Icon
            type={IconType.Ionicons}
            name={"arrow-forward"}
            size={40}
            style={{
              color: isBrightButton ? COLORS.primary : COLORS.white,
              fontSize: 35,
            }}
          />
        ) : null}
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  loginBtnBg: {
    paddingLeft: "10%",
    paddingRight: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 0.8,
    borderRadius: SIZES.ten,
    borderColor: COLORS.lightPurple,
    backgroundColor: COLORS.lightPurple,
  },
});
