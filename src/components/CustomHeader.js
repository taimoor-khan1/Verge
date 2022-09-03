import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, height, SCREENS, SIZES, width } from "../constants";
import MyTouchableOpacity from "./MyTouchableOpacity";
import Icon, { IconType } from "./Icons";

export default function CustomHeader(props) {
  const {
    title,
    subTitle,
    showSearchIcon,
    onSearchPress,
    showShuffleBtn,
    onShuffleClick,
    hasBackArrow,
    EditOption,
    showEditIcon,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={{ flex: 0.2 }}>
        {hasBackArrow && (
          <MyTouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.btnStyle, props.style]}
          >
            <Icon
              name="chevron-back"
              type={IconType.Ionicons}
              size={SIZES.twenty}
              color={COLORS.white}
            />
          </MyTouchableOpacity>
        )}
      </View>

      {title && (
        <View style={styles.titleContainer}>
          <Text style={[FONTS.mediumFont18, styles.titleStyle]}>{title}</Text>

          {subTitle ? (
            <Text style={[FONTS.mediumFont10, styles.subTtitleStyle]}>
              {"  "}( {subTitle} )
            </Text>
          ) : null}
        </View>
      )}

      {showSearchIcon ? (
        <MyTouchableOpacity style={styles.iconStyle} onPress={onSearchPress}>
          <Icon
            name={"search1"}
            type={IconType.AntDesign}
            color={COLORS.textGrey}
          />
        </MyTouchableOpacity>
      ) : showEditIcon ? (
        <MyTouchableOpacity
          style={[styles.iconStyle, props.btnedit]}
          onPress={() => {
            navigation.navigate(SCREENS.EditProfile);
          }}
        >
          <Icon
            name="edit"
            type={IconType.FontAwesome}
            color={COLORS.white}
            size={SIZES.twenty * 1.3}
          />
        </MyTouchableOpacity>
      ) : showShuffleBtn ? (
        <MyTouchableOpacity
          style={styles.shuffleBtnStyle}
          onPress={onShuffleClick}
        >
          <Icon
            name={"shuffle"}
            type={IconType.Ionicons}
            color={COLORS.purple}
            size={SIZES.twenty}
          />

          <Text style={[FONTS.mediumFont12, styles.shuffleTextStyle]}>
            Shuffle
          </Text>
        </MyTouchableOpacity>
      ) : EditOption ? (
        <MyTouchableOpacity
          style={[styles.iconStyle, props.btnedit]}
          onPress={() => {
            navigation.navigate(SCREENS.UpdateCommunity);
          }}
        >
          <Icon
            name="more-horizontal"
            type={IconType.Feather}
            color={COLORS.white}
            size={SIZES.twenty * 1.5}
          />
        </MyTouchableOpacity>
      ) : (
        <View style={{ flex: 0.2 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.fifteen,

    // backgroundColor: COLORS.purple,
    // paddingTop: height * 0.07,
    // paddingBottom: SIZES.twentyFive,
    // borderBottomLeftRadius: SIZES.fifteen,
  },
  btnStyle: {
    borderWidth: 1,
    height: width * 0.1,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.ten,
    borderColor: COLORS.lightPurple,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    color: COLORS.white,
  },
  subTtitleStyle: {
    color: COLORS.textColor,
    alignSelf: "flex-end",
    marginBottom: 2,
  },
  iconStyle: {
    flex: 0.2,
    alignItems: "flex-end",
  },
  shuffleBtnStyle: {
    borderWidth: 1,
    height: width * 0.08,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: SIZES.ten,
    borderColor: COLORS.lightPurple,
    marginLeft: -SIZES.twenty * 2.5,
    paddingHorizontal: SIZES.ten,
  },
  shuffleTextStyle: {
    color: COLORS.purple,
    marginLeft: SIZES.five,
  },
});
