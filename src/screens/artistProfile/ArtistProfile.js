import * as React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {SceneMap} from 'react-native-tab-view';
import {HScrollView} from 'react-native-head-tab-view';
import {CollapsibleHeaderTabView} from 'react-native-tab-view-collapsible-header';
import {COLORS, FONTS, SCREENS, SIZES, STYLES} from '../../constants';
import ReviewListComp from '../../components/ReviewListComp';
import ScrollTabBar from '../../components/ScrollTabBar';
import ArtistProfileHeader from './ArtistProfileHeader';
import AboutMeComp from '../../components/AboutMeComp';
import {SongListComp} from '../../components';
import CommunityCard from './CommunityCard';

const initialLayout = {width: Dimensions.get('window').width};

export default TabViewExample = props => {
  const {navigation} = props;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Top Songs'},
    {key: 'second', title: 'Reviews'},
    {key: 'third', title: 'About Me'},
  ]);

  const renderScene = SceneMap({
    first: () => (
      <HScrollView
        index={0}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        style={{
          padding: SIZES.fifteen,
          paddingVertical: SIZES.twenty,
        }}>
        {songsList.map((item, index) => (
          <SongListComp item={item} />
        ))}
      </HScrollView>
    ),
    second: () => (
      <HScrollView
        index={0}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        style={{
          padding: SIZES.fifteen,
          paddingVertical: SIZES.twenty,
        }}>
        {reviewsList.map((item, index) => (
          <ReviewListComp item={item} />
        ))}
      </HScrollView>
    ),
    third: () => (
      <HScrollView
        index={0}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        style={{
          padding: SIZES.fifteen,
          paddingVertical: SIZES.twenty,
        }}>
        <AboutMeComp />
      </HScrollView>
    ),
  });

  return (
    <View style={[STYLES.container, {paddingTop: 0}]}>
      <CollapsibleHeaderTabView
        renderScrollHeader={() => (
          <View style={{backgroundColor: COLORS.primary}}>
            <ArtistProfileHeader />

            <Text
              style={[
                FONTS.mediumFont18,
                {
                  color: COLORS.white,
                  marginTop: SIZES.twenty * 2,
                  marginHorizontal: SIZES.fifteen,
                },
              ]}>
              Our Community
            </Text>

            <CommunityCard
              title="Community Dev Council"
              image="https://c.ndtvimg.com/2022-02/50auerv8_renault-concept-car_120x90_22_February_22.png"
              onPress={() => navigation.navigate(SCREENS.CommunityScreen)}
            />
          </View>
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={() => {}}
        initialLayout={initialLayout}
        renderTabBar={ScrollTabBar}
      />

      {/* <ScrollableTabView
        collapsableBar={
          <View style={{backgroundColor: COLORS.primary}}>
            <ArtistProfileHeader />

            <Text
              style={[
                FONTS.mediumFont18,
                {
                  color: COLORS.white,
                  marginTop: SIZES.twenty * 2,
                  marginHorizontal: SIZES.fifteen,
                },
              ]}>
              Our Community
            </Text>

            <CommunityCard
              title="Community Dev Council"
              image="https://c.ndtvimg.com/2022-02/50auerv8_renault-concept-car_120x90_22_February_22.png"
              onPress={() => navigation.navigate(SCREENS.CommunityScreen)}
            />
          </View>
        }
        tabBarBackgroundColor="white"
        renderTabBar={() => <DefaultTabBar />}>
        <View tabLabel="Top Songs" style={{backgroundColor: 'blue'}}>
          {songsList.map((item, index) => (
            <SongListComp item={item} />
          ))}
        </View>
        <View tabLabel="Reviews" style={{backgroundColor: 'blue'}}>
          {reviewsList.map((item, index) => (
            <ReviewListComp item={item} />
          ))}
        </View>
        <View tabLabel="About Me" style={{backgroundColor: 'blue'}}>
          <AboutMeComp />
        </View>
      </ScrollableTabView> */}
    </View>
  );
};

const songsList = [
  {
    title: 'The Less I Know The Better',
    subTitle: 'Tame Impala',
    duration: '2:30',
  },
  {
    title: 'New Person, Same Old',
    subTitle: 'Tame Impala',
    duration: '4:00',
  },
  {
    title: 'The Less I Know The Better',
    subTitle: 'Tame Impala',
    duration: '2:30',
  },
  {
    title: 'New Person, Same Old',
    subTitle: 'Tame Impala',
    duration: '4:00',
  },
];

const reviewsList = [
  {
    likes: 8,
    name: 'MF Green Beans',
    date: '06 June, at 2021',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
  },
  {
    likes: 8,
    name: 'MF Green Beans',
    date: '06 June, at 2021',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
  },
];
