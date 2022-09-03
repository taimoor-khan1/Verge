import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useSelector } from "react-redux";
import { Row, Icon, IconType, MyTouchableOpacity } from "../../components";
import CircleImage from "../../components/CircleImage";
import { PremiumPackage } from "../payment";
import {
  STYLES,
  SIZES,
  FONTS,
  COLORS,
  SCREENS,
  CONSTANTS,
  height,
} from "./../../constants/theme";

export default function More(props) {
  const { navigation } = props;
  const userType = useSelector((state) => state.UserType.value);
  const [select, setSelect] = useState(null);
  const [visible, setVisible] = useState(false);
  const [premiumModal, setPremiumModal] = useState(false);
  const [Option, setOptions] = useState([]);

  useEffect(() => {
    setOptions(userType === CONSTANTS.USER_TYPE.USER ? userTabs : artistTabs);
  }, [userType]);

  const renderItem = ({ item, index }) => {
    return (
      <MyTouchableOpacity
        onPressIn={() => {
          setSelect(item.name);
        }}
        onPressOut={() => {
          setSelect("");
        }}
        onPress={() => {
          if (item.screen === "LogOut") {
            setVisible(true);
          } else if (item.screen) {
            navigation.navigate(item?.screen);
          } else {
            setPremiumModal(true);
          }
        }}
        style={select === item.name ? styles.select : styles.unSelect}
      >
        <Row style={{ alignItems: "center" }}>
          <Icon
            name={item.icon}
            type={item.type}
            color={COLORS.white}
            size={SIZES.twentyFive}
          />
          <Text
            style={[
              FONTS.mediumFont14,
              { color: COLORS.white, paddingHorizontal: SIZES.twenty },
            ]}
          >
            {item.name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  return (
    <View
      style={[
        STYLES.container,
        { paddingHorizontal: SIZES.twenty, paddingTop: height * 0.07 },
      ]}
    >
      <Row style={{ alignItems: "center" }}>
        <MyTouchableOpacity
          onPress={() => navigation.navigate(SCREENS.Profile)}
        >
          <CircleImage
            style={{
              height: SIZES.fifty,
              width: SIZES.fifty,
              borderRadius: SIZES.fifty,
              borderWidth: 2,
              borderColor: COLORS.brownGray,
            }}
          />
        </MyTouchableOpacity>

        <View style={{ marginHorizontal: SIZES.fifteen }}>
          <Text style={[FONTS.boldFont18, { color: COLORS.white }]}>
            Valetudo Beats
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.gray }]}>
            Canada
          </Text>
        </View>
      </Row>

      <FlatList
        data={Option}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: SIZES.twentyFive }}
      />

      <PremiumPackage visible={premiumModal} setVisible={setPremiumModal} />

      <Modal visible={visible} transparent={true} animationType={"fade"}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: SIZES.twentyFive,
            backgroundColor: `${COLORS.black}90`,
          }}
        >
          <View style={[styles.modelContainer]}>
            <Text
              style={[
                FONTS.mediumFont18,
                {
                  color: COLORS.textColor,
                  marginVertical: SIZES.fifteen,
                },
              ]}
            >
              Log Out?
            </Text>
            <Text style={[FONTS.mediumFont14, { color: COLORS.gray }]}>
              Are you sure you want to logout?
            </Text>
            <Row
              style={{
                alignSelf: "center",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.twenty,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  { backgroundColor: COLORS.gray },
                ]}
              >
                <Text style={[FONTS.mediumFont12, { color: COLORS.black }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  navigation.navigate(SCREENS.Login);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  { backgroundColor: COLORS.primary },
                ]}
              >
                <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
                  Logout
                </Text>
              </TouchableOpacity>
            </Row>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingVertical: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
    marginRight: SIZES.twenty,
    marginVertical: SIZES.ten,
    backgroundColor: COLORS.purple,
    borderRadius: SIZES.fifteen,
  },
  unSelect: {
    paddingVertical: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
    marginRight: SIZES.twenty,
    marginVertical: SIZES.ten,
    borderRadius: SIZES.fifteen,
  },
  logoutbtn: {
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.ten,
    marginHorizontal: SIZES.fifteen,
    borderRadius: SIZES.five,
    alignItems: "center",
    justifyContent: "center",
  },
  modelContainer: {
    backgroundColor: COLORS.darkPurple,
    padding: SIZES.fifteen,
    paddingHorizontal: SIZES.twenty,
    borderRadius: SIZES.ten,
    borderWidth: 1.2,
    borderColor: COLORS.textColor,
  },
  shodow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

const userTabs = [
  {
    id: "1",
    name: "Notification",
    icon: "ios-notifications-outline",
    type: IconType.Ionicons,
    screen: SCREENS.Noitification,
  },
  {
    id: "2",
    name: "Chats",
    icon: "md-chatbubbles-outline",
    type: IconType.Ionicons,
    screen: SCREENS.ChatList,
  },
  {
    id: "3",
    name: "Terms & Conditions",
    icon: "newspaper-outline",
    type: IconType.Ionicons,
    screen: SCREENS.TermsAndConidtion,
  },
  {
    id: "4",
    name: "Settings",
    icon: "setting",
    type: IconType.AntDesign,
    screen: SCREENS.Setting,
  },
  {
    id: "5",
    name: "Log Out",
    icon: "logout",
    type: IconType.MaterialCommunityIcons,
    screen: "LogOut",
    bgColor: COLORS.transparent,
  },
];

const artistTabs = [
  {
    id: "1",
    name: "Notification",
    icon: "ios-notifications-outline",
    type: IconType.Ionicons,
    screen: SCREENS.Noitification,
  },
  {
    id: "2",
    name: "Community",
    icon: "account-group-outline",
    type: IconType.MaterialCommunityIcons,
    screen: SCREENS.CommunityScreen,
  },

  {
    id: "3",
    name: "Go Premium",
    icon: "diamond",
    type: IconType.SimpleLineIcons,
    screen: null,
  },
  {
    id: "4",
    name: "Terms & Conditions",
    icon: "newspaper-outline",
    type: IconType.Ionicons,
    screen: SCREENS.TermsAndConidtion,
  },
  {
    id: "5",
    name: "Settings",
    icon: "setting",
    type: IconType.AntDesign,
    screen: SCREENS.Setting,
  },
  {
    id: "6",
    name: "Log Out",
    icon: "logout",
    type: IconType.MaterialCommunityIcons,
    screen: "LogOut",
    bgColor: COLORS.transparent,
  },
];
