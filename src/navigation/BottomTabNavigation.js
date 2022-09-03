import React from 'react';
import {Image, StyleSheet, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, IMAGES, SCREENS, SIZES} from '../constants';
import {Favourites} from '../screens/favourites';
import {Moods} from '../screens/music';
import {More} from '../screens/more';
import {Home} from '../screens/home';

const screenOptions = {
  headerShown: false,
};

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name={SCREENS.Home} component={Home} />
    </HomeStack.Navigator>
  );
};

const MusicStack = createNativeStackNavigator();
const MusicStackScreen = () => {
  return (
    <MusicStack.Navigator screenOptions={screenOptions}>
      <MusicStack.Screen name={SCREENS.Moods} component={Moods} />
    </MusicStack.Navigator>
  );
};

const FavouriteStack = createNativeStackNavigator();
const FavouriteStackScreen = () => {
  return (
    <FavouriteStack.Navigator screenOptions={screenOptions}>
      <FavouriteStack.Screen name={SCREENS.Favourites} component={Favourites} />
    </FavouriteStack.Navigator>
  );
};

const MoreStack = createNativeStackNavigator();
const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator screenOptions={screenOptions}>
      <MoreStack.Screen name={SCREENS.More} component={More} />
    </MoreStack.Navigator>
  );
};

const tabs = [
  {
    id: 0,
    name: 'Home',
    initialRoute: SCREENS.Home,
    component: HomeStackScreen,
    icon: IMAGES.homeIcon,
  },
  {
    id: 1,
    name: 'Music',
    initialRoute: SCREENS.Moods,
    component: MusicStackScreen,
    icon: IMAGES.musicIcon,
  },
  {
    id: 2,
    name: 'Favourites',
    initialRoute: SCREENS.Favourites,
    component: FavouriteStackScreen,
    icon: IMAGES.favouriteIcon,
  },
  {
    id: 2,
    name: 'More',
    initialRoute: SCREENS.More,
    component: MoreStackScreen,
    icon: IMAGES.moreIcon,
  },
];

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.brownGray,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <LinearGradient
            start={{x: 0, y: 3}}
            end={{x: 1, y: 0}}
            colors={['#2b153e', '#4e1752', '#2b153e']}
            style={[StyleSheet.absoluteFill, styles.borderRadiusStyle]}
          />
        ),
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({}) => ({
            tabBarIcon: ({focused, color}) => (
              <Image
                resizeMode="contain"
                source={item.icon}
                style={{
                  width: SIZES.twentyFive,
                  height: SIZES.twentyFive,
                  tintColor: focused ? COLORS.white : color,
                }}
              />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  borderRadiusStyle: {
    borderTopRightRadius: SIZES.twenty,
    borderTopLeftRadius: SIZES.twenty,
  },
  tabBarStyle: {
    borderTopWidth: 0,
    position: 'absolute',
    height: SIZES.fifty * 1.1,
    backgroundColor: COLORS.black,
    borderTopRightRadius: SIZES.twenty,
    borderTopLeftRadius: SIZES.twenty,
    paddingTop: Platform.OS === 'android' ? 0 : SIZES.fifteen,
  },
});
