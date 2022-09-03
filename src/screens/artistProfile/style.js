import { StyleSheet, StatusBar } from "react-native";
import { COLORS, height, SIZES, width } from "../../constants";

export default StyleSheet.create({
  imageBackground: {
    height: height * 0.5,
  },
  editBtn: {
    marginTop: StatusBar.currentHeight * 1.8,
    padding: SIZES.ten,
  },
  backArrowStyle: {
    marginTop: StatusBar.currentHeight * 1.8,
  },
  artistTitleView: {
    width: width * 0.6,
    alignSelf: "center",
    marginTop: SIZES.twentyFive * 1.2,
  },
  artistTitle: {
    color: COLORS.white,
    fontSize: SIZES.twenty * 1.6,
  },
  listenersText: {
    color: COLORS.textGrey,
  },
  followersView: {
    width: width * 0.8,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: SIZES.fifty,
    borderBottomLeftRadius: SIZES.fifty,
    backgroundColor: COLORS.background,
    marginTop: SIZES.twenty * 1.6,
    paddingVertical: SIZES.twenty,
    paddingRight: SIZES.twentyFive,
    paddingLeft: SIZES.twenty * 2.5,
  },
  btnContainer: {
    flex: 1,
    color: COLORS.white,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: -SIZES.ten,
  },
  btnStyle: {
    width: width * 0.35,
    marginHorizontal: SIZES.ten,
    height: SIZES.twenty * 2.5,
  },
  cardContainer: {
    flexDirection: "row",
    height: height * 0.13,
    borderRadius: SIZES.ten,
    marginTop: SIZES.twentyFive,
    backgroundColor: COLORS.darkBackground,
    marginHorizontal: SIZES.fifteen,
  },
  cardImgStyle: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: SIZES.ten,
    borderTopLeftRadius: SIZES.ten,
  },
  cardContentView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.twenty,
  },
  cardBtnStyle: {
    marginTop: SIZES.ten,
    borderRadius: SIZES.five,
    height: SIZES.twentyFive * 1.2,
  },
  cardBtnTitle: {
    fontSize: SIZES.ten * 1.2,
  },
  communityHeaderImg: {
    width: width,
    height: height * 0.3,
  },
  communityTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.twenty,
    marginHorizontal: SIZES.fifteen,
  },
  followBtnStyle: {
    flex: 0.4,
    height: SIZES.twenty * 2,
    borderRadius: SIZES.five,
  },
  communityFollowersView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.twenty,
    marginHorizontal: SIZES.fifteen,
  },
  profileImgStyle: {
    height: SIZES.twenty * 2.4,
    width: SIZES.twenty * 2.4,
    borderRadius: SIZES.fifty,
    borderWidth: 2,
    borderColor: COLORS.brownGray,
  },
  messageContainer: {
    marginTop: SIZES.twenty * 2,
    marginHorizontal: SIZES.fifteen,
    flexDirection: "row",
  },
  messageView: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.ten,
    borderBottomLeftRadius: 0,
    paddingHorizontal: SIZES.fifteen,
    backgroundColor: COLORS.purple,
    height: SIZES.twenty * 2.4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: SIZES.twentyFive,
    backgroundColor: `${COLORS.black}90`,
  },
  modalView: {
    borderRadius: SIZES.fifteen,
    backgroundColor: COLORS.lightPurple,
    paddingHorizontal: SIZES.fifteen,
    paddingTop: SIZES.twentyFive,
    paddingBottom: SIZES.fifty * 0.8,
  },
  modalListView: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.twenty,
    borderRadius: SIZES.fifteen,
    backgroundColor: COLORS.white,
    marginTop: SIZES.twentyFive,
  },
  modalImgStyle: {
    height: SIZES.twentyFive,
    width: SIZES.twentyFive,
  },
});
