import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import {
  CustomHeader,
  CommonButton,
  PollComp,
  IconType,
  Icon,
  MyTouchableOpacity,
} from "../../components";
import styles from "./style";
import {
  COLORS,
  FONTS,
  IMAGES,
  SIZES,
  STYLES,
  CONSTANTS,
  SCREENS,
} from "../../constants";

export default function CommunityScreen(props) {
  const { navigation } = props;
  const userType = useSelector((state) => state.UserType.value);

  return (
    <View style={[STYLES.container, { paddingTop: 0 }]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: SIZES.fifty * 2,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          style={styles.communityHeaderImg}
          source={{
            uri:
              "https://c.ndtvimg.com/2022-02/50auerv8_renault-concept-car_120x90_22_February_22.png",
          }}
        >
          {userType === CONSTANTS.USER_TYPE.USER ? (
            <CustomHeader hasBackArrow style={styles.backArrowStyle} />
          ) : (
            <CustomHeader
              hasBackArrow
              style={styles.backArrowStyle}
              EditOption
              btnedit={styles.editBtn}
            />
          )}
        </ImageBackground>

        <View style={styles.communityTitleView}>
          <Text
            style={[
              FONTS.boldFont24,
              {
                flex: 1,
                color: COLORS.white,
                marginRight: SIZES.ten,
              },
            ]}
          >
            Community Dev Council
          </Text>

          {userType === CONSTANTS.USER_TYPE.USER ? (
            <CommonButton
              title="Chat"
              onPress={() => {
                navigation.navigate(SCREENS.ChatList);
              }}
              btnStyle={styles.followBtnStyle}
              titleStyle={FONTS.mediumFont14}
            />
          ) : (
            <CommonButton
              title="Create Post"
              titleStyle={FONTS.mediumFont14}
              btnStyle={styles.followBtnStyle}
              onPress={() => navigation.navigate(SCREENS.CreatePoll)}
            />
          )}
        </View>

        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.textGrey,
              marginTop: SIZES.fifteen,
              marginHorizontal: SIZES.fifteen,
            },
          ]}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Text>

        <View style={styles.communityFollowersView}>
          <View style={{ flex: 0.3 }}>
            <Text style={[FONTS.mediumFont12, { color: COLORS.textGrey }]}>
              Followers
            </Text>
            <Text
              numberOfLines={1}
              style={[
                FONTS.mediumFont16,
                { color: COLORS.white, marginTop: SIZES.five },
              ]}
            >
              140.8k
            </Text>
          </View>

          <View style={{ flex: 0.3 }}>
            <Text style={[FONTS.mediumFont12, { color: COLORS.textGrey }]}>
              Tracks
            </Text>
            <Text
              numberOfLines={1}
              style={[
                FONTS.mediumFont16,
                { color: COLORS.white, marginTop: SIZES.five },
              ]}
            >
              78
            </Text>
          </View>
        </View>

        {pollData.map((item, index) => (
          <PollComp key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const pollData = [
  {
    date: new Date(),
    image: IMAGES.profileImage,
    name: "Jessica John",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    subTitle: "What would your ideal work situation be?",
    options: [
      { title: "100% Office" },
      { title: "70% office, 30% remote" },
      { title: "70% remote, 30% office" },
      { title: "100% remote" },
    ],
    pollEnded: false,
    likes: 7,
    dislikes: 3,
    votes: 0,
  },
  {
    date: new Date(),
    image: IMAGES.profileImage,
    name: "Williams Locke",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    subTitle: "What would your ideal work situation be?",
    options: [
      { title: "100% Office", percentage: 30 },
      { title: "70% office, 30% remote", percentage: 25 },
      { title: "70% remote, 30% office", percentage: 40 },
      { title: "100% remote", percentage: 15 },
    ],
    pollEnded: true,
    likes: 5,
    dislikes: 2,
    votes: 299,
  },
];
