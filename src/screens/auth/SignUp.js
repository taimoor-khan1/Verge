import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Linking,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, SCREENS, SIZES, STYLES, width } from "../../constants";
import EditText from "../../components/EditText";

import {
  CustomButton,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { useSelector } from "react-redux";

export default function SignUp(props) {
  const { navigation } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTnCChecked, setisTnCChecked] = useState(false);
  const [is18PlusChecked, setis18PlusChecked] = useState(false);

  const _toggleIsTnCChecked = () => {
    setisTnCChecked(!isTnCChecked);
  };

  const _toggleIs18PlusChecked = () => {
    setis18PlusChecked(!is18PlusChecked);
  };

  return (
    <View style={STYLES.container}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: SIZES.fifteen,
        }}
      >
        <View style={{ marginBottom: SIZES.fifteen }}>
          <Text style={[FONTS.boldFont24, { color: COLORS.white }]}>
            Sign Up
          </Text>
        </View>

        <View style={{ paddingTop: SIZES.twentyFive }}>
          <EditText
            label="Full Name"
            value={name}
            autoCapitalize
            onChangeText={(text) => {
              setName(text);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            password={false}
          />
          <EditText
            email
            label="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            password={false}
          />
          <EditText
            label="Address"
            value={address}
            onChangeText={(text) => {
              setAddress(text);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            password={false}
          />
          <EditText
            label="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            password={true}
          />
          <EditText
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            password={true}
          />
        </View>

        <MyTouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: SIZES.fifteen,
          }}
          onPress={() => {
            _toggleIsTnCChecked();
          }}
        >
          <Icon
            type={IconType.Ionicons}
            name={isTnCChecked ? "ios-checkbox-outline" : "ios-square-outline"}
            size={25}
            color={COLORS.lightPurple}
          />
          <View>
            <Text
              style={[
                FONTS.mediumFont10,
                {
                  color: COLORS.textGrey,
                  marginStart: SIZES.five,
                  maxWidth: width * 0.75,
                },
              ]}
            >
              I Agree to the Terms & Conditions & Privacy Policy of{" "}
              <Text
                onPress={() => {
                  Linking.openURL("https://www.verge.com");
                }}
              >
                <Text style={[FONTS.mediumFont12, { color: COLORS.textColor }]}>
                  Verge.com
                </Text>
              </Text>
            </Text>
          </View>
        </MyTouchableOpacity>

        <MyTouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: SIZES.fifteen,
          }}
          onPress={() => {
            _toggleIs18PlusChecked();
          }}
        >
          <Icon
            type={IconType.Ionicons}
            name={
              is18PlusChecked ? "ios-checkbox-outline" : "ios-square-outline"
            }
            size={25}
            color={COLORS.lightPurple}
          />
          <Text
            style={[
              FONTS.mediumFont10,
              {
                color: COLORS.textGrey,
                marginStart: SIZES.five,
                maxWidth: width * 0.75,
              },
            ]}
          >
            I Confirm that I am at least 18+ Year Old
          </Text>
        </MyTouchableOpacity>

        <CustomButton
          label={"Register"}
          style={{
            marginVertical:
              Platform.OS === "android" ? SIZES.twentyFive * 1.2 : SIZES.twenty,
          }}
          onPress={() => navigation.navigate(SCREENS.Verification)}
        />

        <MyTouchableOpacity
          onPress={() => navigation.navigate(SCREENS.Login)}
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginVertical: SIZES.ten,
            marginBottom: SIZES.twenty,
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <Text style={[FONTS.mediumFont14, { color: COLORS.textGrey }]}>
              Already have an account?{" "}
            </Text>
            <Text style={[FONTS.mediumFont14, { color: COLORS.textColor }]}>
              Sign In
            </Text>
          </Row>
        </MyTouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
