import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants";
import EditText from "../../components/EditText";
import {
  CustomButton,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from "../../components";
import auth, { firebase } from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useSelector } from "react-redux";

export default function Login(props) {
  const { navigation, route } = props;
  const userType = useSelector((state) => state.UserType.value);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "1048958253490-2j73ljj1jqi418mj2s33m6sgsjmv2ili.apps.googleusercontent.com",
    });
    initFirebase();
  }, []);

  const initFirebase = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyAWggjsIQl9aCpIEl4UHg6HtYazw362M-U",
      authDomain: "verge-80fec.firebaseapp.com",
      projectId: "verge-80fec",
      storageBucket: "verge-80fec.appspot.com",
      messagingSenderId: "1048958253490",
      appId: "1:1048958253490:web:e3ac5d0d15a0f7d16a0cab",
      measurementId: "G-PY1F9NV39Y",
      databaseURL: "",
    };
    !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app();
  };

  // ==========================google login====================
  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(googleCredential)
      .then((res) => {
        // console.log("goooglleee data", res);
        // dispatcher(show());
        // var name = res.user.displayName;
        // var email = res.user.email;
        // dispatcher(Googlelogin({ name, email, idToken }))
        //   .unwrap()
        //   .then((response) => {
        //     dispatcher(hide);
        //   });
        // GoodleauthenticateHandler(res.user);
      })
      .catch((e) => {
        // console.log("onGoogleButtonPress e =============>>>>>>>>>", e);
      });
  }

  // ============ facebook login ==============

  const facebookAuthenticateHandler = async (data) => {
    // setIsloading(true);
    await dispatcher(
      AuthActions.FacebookLoginUser(data, (responcee) => {
        setIsloading(false);
        if (responcee.success === 0) {
          // seterrorMsg(JSON.stringify(responcee.data));
          // setshowErrorView(true);
        }
      })
    );
  };
  // =======================facebook login================
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    console.log("result ===== fb login ======= >>>>> ", result);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }
    initUser(data.accessToken);
  }
  // =====================get facebook user data================
  function initUser(token) {
    fetch(
      "https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=" +
        token
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("login faceeeeebooooooooklkkkk", json);
        // dispatcher(show());
        // dispatcher(Facebooklogin(json.name, json.email, token))
        //   .unwrap()
        //   .then((_response) => {
        //     dispatcher(hide());
        //   });
      })
      .catch((err) => {
        console.log("error on login", err);
      });
  }

  return (
    <View style={STYLES.container}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: SIZES.fifteen,
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: SIZES.fifteen }}>
          <Text style={[FONTS.boldFont24, { color: COLORS.white }]}>Login</Text>
        </View>
        <View
          style={{
            paddingTop: SIZES.fifty,
          }}
        >
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
            label="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            password={true}
          />
        </View>

        <CustomButton
          label={"Login"}
          style={{
            marginVertical:
              Platform.OS === "android" ? SIZES.twentyFive * 1.2 : SIZES.twenty,
          }}
          onPress={() => navigation.navigate(SCREENS.App)}
        />

        <MyTouchableOpacity
          style={{
            alignItems: "center",
            marginVertical: SIZES.twentyFive,
          }}
          onPress={() => navigation.navigate(SCREENS.ForgotPassword)}
        >
          <Text style={[FONTS.mediumFont12, { color: COLORS.textColor }]}>
            Forgot Password?
          </Text>
        </MyTouchableOpacity>

        {userType === CONSTANTS.USER_TYPE.USER && (
          <Row
            style={{
              alignItems: "center",
              marginVertical: SIZES.twentyFive,
              justifyContent:
                Platform.OS === "ios" ? "space-around" : "space-evenly",
            }}
          >
            {/* ======================google button====================== */}
            <MyTouchableOpacity
              onPress={() => onGoogleButtonPress()}
              style={{
                backgroundColor: `${COLORS.lightPurple}10`,
                paddingHorizontal:
                  Platform.OS === "ios" ? SIZES.twenty : SIZES.twentyFive,
                paddingVertical:
                  Platform.OS === "ios" ? SIZES.ten : SIZES.fifteen,
                borderColor: `${COLORS.brownGray}10`,
                borderWidth: 1,
                borderRadius: SIZES.ten,
                shadowColor: COLORS.darkBackground,
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
                // backgroundColor: 'red',
                elevation: 18,
              }}
            >
              <Image
                source={IMAGES.googleIcon}
                resizeMode={"contain"}
                style={{ height: SIZES.twentyFive, width: SIZES.twentyFive }}
              />
            </MyTouchableOpacity>

            {/* =====================apple Button ======================== */}

            {Platform.OS === "ios" && (
              <MyTouchableOpacity
                style={{
                  backgroundColor: `${COLORS.white}10`,
                  paddingHorizontal: SIZES.twentyFive * 1.3,
                  paddingVertical: SIZES.ten,
                  borderRadius: SIZES.ten,
                  shadowColor: COLORS.darkBackground,
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.48,
                  shadowRadius: 11.95,
                  elevation: 18,
                }}
              >
                <Icon
                  type={IconType.Ionicons}
                  name={"ios-logo-apple"}
                  color={COLORS.white}
                  size={SIZES.twentyFive * 1.5}
                />
              </MyTouchableOpacity>
            )}

            {/* =============facebook button===================== */}
            <MyTouchableOpacity
              onPress={() => {
                onFacebookButtonPress();
              }}
              style={{
                backgroundColor: `${COLORS.lightPurple}10`,
                paddingHorizontal:
                  Platform.OS === "ios" ? SIZES.twenty : SIZES.twentyFive,
                paddingVertical:
                  Platform.OS === "ios" ? SIZES.ten : SIZES.fifteen,
                borderColor: `${COLORS.brownGray}10`,
                borderWidth: 1,
                borderRadius: SIZES.ten,
                shadowColor: COLORS.darkBackground,
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
                elevation: 18,
              }}
            >
              <Image
                source={IMAGES.facebookIcon}
                resizeMode={"contain"}
                style={{ height: SIZES.twentyFive, width: SIZES.twentyFive }}
              />
            </MyTouchableOpacity>
          </Row>
        )}

        <MyTouchableOpacity
          onPress={() => {
            // navigation.navigate(SCREENS.CreateAccount)
            navigation.navigate(
              userType === CONSTANTS.USER_TYPE.USER
                ? SCREENS.PersonalitySurvey
                : SCREENS.SignUp
            );
          }}
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginTop: SIZES.twentyFive,
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <Text style={[FONTS.mediumFont14, { color: COLORS.textGrey }]}>
              Don't have any account?{" "}
            </Text>
            <Text style={[FONTS.mediumFont14, { color: COLORS.textColor }]}>
              Sign Up
            </Text>
          </Row>
        </MyTouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
