import React from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {COLORS, IMAGES, SCREENS, SIZES, STYLES, width} from '../../constants';
import {
  HomeHeader,
  CustomSlider,
  CircleButton,
  Icon,
  IconType,
  MyTouchableOpacity,
} from '../../components';
import styles from './style';

const data = [
  {
    title: 'Evolve',
    subTitle: 'Imagine, Dragons',
    image:
      'https://i.pinimg.com/originals/5c/3f/d9/5c3fd9952bbd0235c4911da8d9fdac5e.webp',
  },
  {
    title: 'Stunners',
    subTitle: 'Afsanay',
    image: 'https://cdn.wallpapersafari.com/60/61/rwdAs8.jpg',
  },
  {
    title: 'Eminem',
    subTitle: 'Abcd Track',
    image:
      'https://i.pinimg.com/originals/0a/f8/be/0af8bea8f50b962f3d9cdfe406cb3677.jpg',
  },
];

export default function Home(props) {
  const {navigation} = props;

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.carouselView}>
        <Image source={{uri: item.image}} style={styles.sliderImgStyle} />

        <HomeHeader
          title={item.title}
          subTitle={item.subTitle}
          headerStyle={styles.headerStyle}
          headerImgStyle={styles.headerImgStyle}
        />
      </View>
    );
  };

  return (
    <View style={[STYLES.container, {paddingTop: 0}]}>
      <HomeHeader
        onImagePress={() => {
          navigation.navigate(SCREENS.Profile);
        }}
      />

      <View style={styles.mainView}>
        {/* <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width * 0.6}
        /> */}

        <View style={styles.carouselView}>
          <View>
            <Image
              source={{uri: data[2].image}}
              style={styles.sliderImgStyle}
            />

            <MyTouchableOpacity style={styles.playIconStyle}>
              <Icon
                name="play"
                type={IconType.FontAwesome5}
                color={`${COLORS.white}95`}
                size={SIZES.fifty}
              />
            </MyTouchableOpacity>
          </View>

          <HomeHeader
            title={data[0].title}
            subTitle={data[0].subTitle}
            headerStyle={styles.headerStyle}
            headerImgStyle={styles.headerImgStyle}
            onImagePress={() => navigation.navigate(SCREENS.ArtistProfile)}
          />

          <CustomSlider sliderLength={width * 0.65} />
        </View>

        <View style={{marginTop: SIZES.twentyFive * 1.2}}>
          <CircleButton icon={IMAGES.favouriteIcon} />
        </View>
      </View>
    </View>
  );
}
