import React, {useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ReviewListComp from './ReviewListComp';
import ScrollTabBar from './ScrollTabBar';
import {SIZES, width} from '../constants';
import SongListComp from './SongListComp';
import AboutMeComp from './AboutMeComp';

export default function CustomTabs(props) {
  const {songsData, reviewsData} = props;
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'all', title: 'all'},
    {key: 'artist', title: 'artist'},
    {key: 'playlist', title: 'playlist'},
    {key: 'music', title: 'music'},
  ]);

  const renderScene = SceneMap({
    all: () => (
      <View></View>
      // <FlatList
      //   data={songsData}
      //   showsVerticalScrollIndicator={false}
      //   renderItem={({item}) => <SongListComp item={item} />}
      //   keyExtractor={(item, index) => index}
      //   scrollEventThrottle={16}
      //   contentContainerStyle={{
      //     flexGrow: 1,
      //     paddingBottom: SIZES.fifty,
      //     paddingHorizontal: SIZES.fifteen,
      //   }}
      // />
    ),

    artist: () => (
      <View></View>
      // <FlatList
      //   data={reviewsData}
      //   renderItem={({item}) => <ReviewListComp item={item} />}
      //   keyExtractor={(item, index) => index}
      //   showsVerticalScrollIndicator={false}
      //   scrollEventThrottle={16}
      //   contentContainerStyle={{
      //     flexGrow: 1,
      //     paddingBottom: SIZES.fifty,
      //     paddingHorizontal: SIZES.fifteen,
      //   }}
      // />
    ),
    playlist: () => (
      <View></View>
      // <ScrollView
      //   contentContainerStyle={{
      //     flexGrow: 1,
      //     paddingBottom: SIZES.fifty,
      //     paddingHorizontal: SIZES.fifteen,
      //   }}>
      //   <AboutMeComp />
      // </ScrollView>
    ),
    music: () => (
      <View></View>
      // <ScrollView
      //   contentContainerStyle={{
      //     flexGrow: 1,
      //     paddingBottom: SIZES.fifty,
      //     paddingHorizontal: SIZES.fifteen,
      //   }}>
      //   <AboutMeComp />
      // </ScrollView>
    ),
  });

  return (
    <TabView
      renderTabBar={ScrollTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: width}}
    />
  );
}
