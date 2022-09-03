import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { CustomHeader, CustomButton } from "../../components";
import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants";
import { useSelector } from "react-redux";

export default function Verification(props) {
  const usertype = useSelector((state) => state.UserType.value);

  const { navigation } = props;
  const [code, setcode] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focusField(0);
    }, 500);
  }, []);

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.twenty,
        }}
      >
        <Text
          style={[
            FONTS.boldFont24,
            {
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.twentyFive * 1.3,
            },
          ]}
        >
          Verification
        </Text>

        <Text
          style={[
            FONTS.mediumFont16,
            {
              lineHeight: 22,
              textAlign: "center",
              color: COLORS.textGrey,
              marginTop: SIZES.ten * 1.8,
              paddingHorizontal: SIZES.ten,
            },
          ]}
        >
          Enter your verification code that we sent you through your email
        </Text>

        <View style={{ paddingTop: SIZES.twentyFive * 1.45 }}>
          <OTPInputView
            code={code}
            pinCount={4}
            ref={inputRef}
            onCodeChanged={setcode}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.otp}
            codeInputHighlightStyle={styles.otp}
            style={styles.container}
          />
        </View>

        <CustomButton
          label={"Verify"}
          style={{ marginTop: SIZES.fifteen * 3.5 }}
          onPress={() => {
            navigation.navigate(
              usertype === CONSTANTS.USER_TYPE.USER
                ? SCREENS.App
                : SCREENS.CreateCommunity
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otp: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 3,
    width: SIZES.twenty * 3,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.lightPurple,
  },
  container: {
    width: "100%",
    height: SIZES.twentyFive * 6,
  },
});
