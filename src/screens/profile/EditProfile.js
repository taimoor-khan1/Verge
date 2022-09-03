import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SCREENS, SIZES, height, width } from "../../constants";
import CircleImage from "../../components/CircleImage";
import {
  CustomHeader,
  CustomButton,
  EditText,
  Icon,
  IconType,
  Row,
  MyTouchableOpacity,
} from "../../components";

export default function EditProfile(props) {
  const { navigation } = props;
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={{ backgroundColor: COLORS.primary, flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.purple,
          paddingTop: height * 0.07,
          paddingBottom: SIZES.twentyFive,
          borderBottomLeftRadius: SIZES.fifteen,
        }}
      >
        <CustomHeader hasBackArrow title={"Edit Profile"} />
      </View>

      <Row style={styles.rowStyle}>
        <View>
          <CircleImage />

          <MyTouchableOpacity
            style={{
              right: -5,
              bottom: -5,
              position: "absolute",
              backgroundColor: COLORS.purple,
              padding: SIZES.five,
              borderRadius: width,
            }}
          >
            <Icon
              name="camera-outline"
              type={IconType.Ionicons}
              color={COLORS.white}
              size={SIZES.fifteen * 1.3}
            />
          </MyTouchableOpacity>
        </View>

        <View
          style={{ justifyContent: "center", marginHorizontal: SIZES.fifteen }}
        >
          <Text
            style={[
              FONTS.mediumFont14,
              { color: COLORS.white, marginBottom: SIZES.ten },
            ]}
          >
            Valetudo Beats
          </Text>
          <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
            Canada
          </Text>
        </View>
      </Row>

      <View style={styles.EditContainer}>
        <EditText
          value={userName}
          label={"User name"}
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <EditText
          value={address}
          label={"Address"}
          onChangeText={(text) => {
            setAddress(text);
          }}
        />
        <EditText
          value={password}
          label={"Password"}
          onChangeText={(text) => {
            setPassword(text);
          }}
          password
        />
        <EditText
          value={confirmPassword}
          label={"Confirm Password"}
          onChangeText={(text) => {
            setConfirmPassword(text);
          }}
          password
        />
        <CustomButton
          label={"Save & Continue"}
          style={{ marginTop: SIZES.twentyFive }}
          onPress={() => {
            navigation.navigate(SCREENS.Home);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    padding: SIZES.fifteen,
    paddingTop: SIZES.twenty,
  },
  EditContainer: {
    paddingHorizontal: SIZES.twenty,
    paddingTop: SIZES.twentyFive,
    marginTop: SIZES.fifteen,
    flex: 1,
  },
});
