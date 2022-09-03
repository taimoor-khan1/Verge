import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import { SCREENS } from "../constants";

import { More } from "../screens/more";
import { Playlist } from "../screens/music";
import { SearchScreen } from "../screens/searchScreen";
import { SocialTokens, SingleSocialToken } from "../screens/socialTokens";
import { Payment, AddCard, PaymentMethod, GoPremium } from "../screens/payment";
import { Notifications, NotificationSettings } from "../screens/notification";
import { TermsAndCondition, AboutApp } from "./../screens/content";
import { Profile, EditProfile } from "../screens/profile";
import { Setting } from "../screens/setting";
import {
  Login,
  SignUp,
  CreateAccount,
  ForgotPassword,
  PersonalitySurvey,
  Verification,
} from "../screens/auth";
import {
  ArtistProfile,
  CommunityScreen,
  CreatePoll,
  UploadMusic,
} from "../screens/artistProfile";
import LoginAccount from "../screens/auth/LoginAccount";
import CreateCommunity from "../screens/auth/CreateCommunity";
import UpdateCommunity from "../screens/artistProfile/UpdateCommunity";
import Chat from "../screens/chat/Chat";
import ChatList from "../screens/chat/ChatList";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: "slide_from_right",
};

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={SCREENS.LoginAccount}
      >
        <Stack.Screen name={SCREENS.Login} component={Login} />
        <Stack.Screen name={SCREENS.LoginAccount} component={LoginAccount} />
        <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
        <Stack.Screen name={SCREENS.CreateAccount} component={CreateAccount} />
        <Stack.Screen name={SCREENS.Verification} component={Verification} />
        <Stack.Screen
          name={SCREENS.CreateCommunity}
          component={CreateCommunity}
        />
        <Stack.Screen
          name={SCREENS.UpdateCommunity}
          component={UpdateCommunity}
        />
        <Stack.Screen
          name={SCREENS.ForgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={SCREENS.PersonalitySurvey}
          component={PersonalitySurvey}
        />
        <Stack.Screen name={SCREENS.App} component={BottomTabNavigation} />
        <Stack.Screen name={SCREENS.SocialTokens} component={SocialTokens} />
        <Stack.Screen name={SCREENS.ArtistProfile} component={ArtistProfile} />
        <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
        <Stack.Screen name={SCREENS.Profile} component={Profile} />
        <Stack.Screen name={SCREENS.Setting} component={Setting} />
        <Stack.Screen name={SCREENS.AboutApp} component={AboutApp} />
        <Stack.Screen name={SCREENS.Payment} component={Payment} />
        <Stack.Screen name={SCREENS.GoPremium} component={GoPremium} />
        <Stack.Screen name={SCREENS.PaymentMethod} component={PaymentMethod} />
        <Stack.Screen name={SCREENS.Playlist} component={Playlist} />
        <Stack.Screen name={SCREENS.More} component={More} />
        <Stack.Screen name={SCREENS.Noitification} component={Notifications} />
        <Stack.Screen name={SCREENS.SearchScreen} component={SearchScreen} />
        <Stack.Screen
          name={SCREENS.SingleSocialToken}
          component={SingleSocialToken}
        />
        <Stack.Screen
          name={SCREENS.NotificationSettings}
          component={NotificationSettings}
        />
        <Stack.Screen
          name={SCREENS.CommunityScreen}
          component={CommunityScreen}
        />
        <Stack.Screen name={SCREENS.AddCard} component={AddCard} />
        <Stack.Screen
          name={SCREENS.TermsAndConidtion}
          component={TermsAndCondition}
        />
        <Stack.Screen name={SCREENS.CreatePoll} component={CreatePoll} />
        <Stack.Screen name={SCREENS.UploadMusic} component={UploadMusic} />
        <Stack.Screen name={SCREENS.Chat} component={Chat} />
        <Stack.Screen name={SCREENS.ChatList} component={ChatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
