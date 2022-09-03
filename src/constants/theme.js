import { Dimensions, StyleSheet, Platform } from "react-native";

export const { width, height } = Dimensions.get("window");

/* * Colors * */
export const COLORS = {
  primary: "#1d0f2f",
  purple: "#4e1789",
  lightPurple: "#871af6",
  darkPurple: "#382649",
  purpleShade: "#3c225d",
  textGrey: "#8a7e9a",
  textColor: "#B46BFF",
  brownGray: "#5d536a",
  background: "#362545",
  darkBackground: "#27153e",
  black: "#000000",
  white: "#ffffff",
  blue: "#0037c1",
  gray: "#767577",
  star: "#FFD700",
  golden: "#FFD700",
  trueGreen: "#1eaf08",
  halfWhite: "#eeeeee",
  charcoalGrey: "#4a4b4d",
  veryLightpink: "#ffeef2",
  transparent: "transparent",
  pink: "#d323a0",
  red: "#FF0000",
};

const appTheme = { COLORS };

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Bold: "Montserrat-Bold",
  Light: "Montserrat-Light",
  Medium: "Montserrat-Medium",
  Regular: "Montserrat-Regular",

  Ionicons: "Ionicons",
  AntDesign: "AntDesign",
  EvilIcons: "EvilIcons",
  Entypo: "Entypo",
  FontAwesome: "FontAwesome",
  Feather: "Feather",
  MaterialIcons: "MaterialIcons",
  MaterialCommunityIcons: "MaterialCommunityIcons",
  Octicons: "Octicons",
  SimpleLineIcons: "SimpleLineIcons",
  Fontisto: "Fontisto",
};

/* * Images * */
export const IMAGES = {
  noWifi: require("../assets/images/no-wifi.png"),
  headPhone: require("../assets/images/headphones/headphones.png"),
  googleIcon: require("../assets/images/googleIcon.png"),
  facebookIcon: require("../assets/images/facebookIcon.png"),
  profileImage: require("../assets/images/profile-image.png"),
  sliderThumbIcon: require("../assets/images/sliderThumbIcon/sliderThumbIcon.png"),
  asArtistIcon: require("../assets/images/asArtistIcon/asArtistIcon.png"),
  asUserIcon: require("../assets/images/asUserIcon/asUserIcon.png"),
  vergeLogo: require("../assets/images/vergeLogo/vergeLogo.png"),
  moreIcon: require("../assets/images/moreIcon/moreIcon.png"),
  homeIcon: require("../assets/images/homeIcon/homeIcon.png"),
  musicIcon: require("../assets/images/musicIcon/musicIcon.png"),
  musicListIcon: require("../assets/images/musicListIcon/musicListIcon.png"),
  favouriteIcon: require("../assets/images/favouriteIcon/favouriteIcon.png"),
  filledHeart: require("../assets/images/filledHeart/filled-heart.png"),
  bgMusicShape: require("../assets/images/bgmusicshape.png"),
  iconLike: require("../assets/images/iconLike.png"),
  iconUnlike: require("../assets/images/iconUnlike.png"),
  iconReply: require("../assets/images/iconReply.png"),
  PremiumMusic: require("../assets/images/PremiumMusic.png"),
  CardFront: require("../assets/images/card-front.png"),
};

/* * Screens * */
export const SCREENS = {
  Startup: "Startup",
  Login: "Login",
  LoginAccount: "LoginAccount",
  CreateAccount: "CreateAccount",
  CreateCommunity: "CreateCommunity",
  UpdateCommunity: "UpdateCommunity",
  SignUp: "SignUp",
  Splash: "Splash",
  ResetPassword: "ResetPassword",
  ForgotPassword: "ForgotPassword",
  Verification: "Verification",
  NewPassword: "NewPassword",
  Home: "Home",
  Moods: "Moods",
  Noitification: "Noitification",
  Payment: "Payment",
  Setting: "Setting",
  NewOrder: "NewOrder",
  OrderHistory: "OrderHistory",
  OrderDetails: "OrderDetails",
  Coupons: "Coupons",
  Additem: "Additem",
  Profile: "Profile",
  EditProfile: "EditProfile",
  RiderLogin: "RiderLogin",
  SelectType: "SelectType",
  DrawerNavigator: "DrawerNavigator",
  App: "App",
  SocialTokens: "SocialTokens",
  Favourites: "Favourites",
  ArtistProfile: "ArtistProfile",
  Setting: "Setting",
  AboutApp: "AboutApp",
  TermsAndConidtion: "TermsAndConidtion",
  GoPremium: "GoPremium",
  PaymentMethod: "PaymentMethod",
  CommunityScreen: "CommunityScreen",
  Playlist: "Playlist",
  PremiumPackges: "PremiumPackges",
  AddCard: "AddCard",
  Drawer: "Drawer",
  More: "More",
  NotificationSettings: "NotificationSettings",
  SingleSocialToken: "SingleSocialToken",
  MusicPlayer: "MusicPlayer",
  SearchScreen: "SearchScreen",
  CreatePoll: "CreatePoll",
  UploadMusic: "UploadMusic",
  PersonalitySurvey: "PersonalitySurvey",
  Chat: "Chat",
  ChatList: "ChatList",
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  semiBoldFont16: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  semiBoldFont18: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  semiBoldFont20: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  semiBoldFont22: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  semiBoldFont24: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  mediumFont10: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10 },
  mediumFont12: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12 },
  mediumFont14: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14 },
  mediumFont16: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16 },
  mediumFont18: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18 },
  regularFont10: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body10 },
  regularFont12: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body12 },
  regularFont14: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body14 },
  regularFont16: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body16 },
  regularFont18: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body18 },
  lightFont08: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08 },
  lightFont10: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10 },
  lightFont12: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12 },
  lightFont14: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14 },
  lightFont16: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16 },
  lightFont18: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18 },
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.07,
    backgroundColor: COLORS.primary,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: "center",
  },
  loginView: {
    flex: 1,
    width: "100%",
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    alignItems: "baseline",
    borderRadius: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    shadowColor: COLORS.black,
  },

  tabBarStyle: {
    borderTopWidth: 0,
    position: "absolute",
    height: SIZES.fifty * 1.1,
    backgroundColor: COLORS.black,
    borderTopRightRadius: SIZES.twenty,
    borderTopLeftRadius: SIZES.twenty,
    paddingTop: Platform.OS === "android" ? 0 : SIZES.fifteen,
  },
});

export const CONSTANTS = {
  Grocery: "grocery",
  FoodDelievery: "foodDelievery",
  PickUp: "PickUp",
  VENDOR: "VENDOR",
  HUNGER: "HUNGER",

  REDUX_ACTIONS: {
    ACCESSTOKEN: "ACCESSTOKEN",
    LOGIN: "LOGIN",
    AUTHENTICATE: "AUTHENTICATE",
    LOGOUT: "LOGOUT",
    SIGNUP: "SIGNUP",

    SELECTEDSECTION: "SELECTEDSECTION",
    PICKUP: "PICKUP",
    GROCERY: "GROCERY",
    DELIEVERY: "DELIEVERY",
    SHOWALTER: "SHOWALTER",
    SHOW_ERROR: "SHOW_ERROR",
    SHOW_LOADER: "SHOW_LOADER",
  },

  API_URLS: {
    BASE: "http://porter.reignsol.net/api/v1/",
    BASE_VENDOR: "http://porter.reignsol.net/api/v1/vendor/",
    IMAGE: "http://porter.reignsol.net/",

    LOGIN: "login",
    LOGOUT: "sign-out",
    SIGN_UP: "register",
    VERIFY_OTP: "verify-otp",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    CHANGE_PASSWORD: "change-password",
    GET_PROFILE: "getRestProfile",
    UPDATE_PROFILE: "update-profile",
    GET_CONTENT: "contents",
    PAST_ORDERS: "orders/past-orders",
    NEW_ORDERS: "orders/new-orders",
    NEW_ORDERS_VIEW: "orders/getOrderView",
    VIEW_ORDER: "orders/view-order",
    GROCERY_CATEGORIES: "items/getGroceryCategories",
    RESTAURANT_CATEGORIES: "items/getRestaurantCategories",
    ITEMS_BY_CATEGORY: "items/getByCategory",
    ITEM_CREATE: "items/create",
    SAVE_DEVICE_TOKEN: "",
    COUPONS: "coupons",
    CHANGE_ACTIVE_STATUS: "customer/addRemove",
    ORDER_REJECT: "orders/reject",
    ORDER_ACCEPT: "orders/accept",
    ORDER_READY: "orders/ready-order",
    ORDER_ASSIGN: "orders/assign",
    ORDER_COMPLETE: "orders/complete-order",
    GET_EXPERTISE: "items/getAllExpertise",
    GET_PAYMENTS: "orders/get-paymentDetails",
  },

  /* * FirebaseConstants * */
  FIREBASE: {
    CHAT: "Chat",
    MESSAGES: "messages",
    USERS: "Users",
    CHATHEADS: "ChatHeads",
    READ: "read",
    TOKEN: "Tokens",
    FCM: "https://fcm.googleapis.com/fcm/send",
  },

  DESTINATIONS: {
    SIGN_UP: "sign_up",
    FORGOT_PASSWORD: "forgot_password",
  },

  CACHE_KEYS: {
    DEFAULT_USER: "access_token",
    IS_FIRST_TIME: "is_first_time",
  },

  USER_TYPE: {
    USER: "User",
    ARTIST: "Artist",
  },
};
