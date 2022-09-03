import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar, Platform} from 'react-native';
import {COLORS, FONTS, IMAGES, SIZES} from '../constants';
import MyTouchableOpacity from './MyTouchableOpacity';

export default function HomeHeader(props) {
  const {title, subTitle, headerStyle, headerImgStyle, onImagePress, image} =
    props;

  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <MyTouchableOpacity onPress={onImagePress}>
        <Image
          source={image ? image : IMAGES.profileImage}
          style={[styles.profileImgStyle, headerImgStyle]}
        />
      </MyTouchableOpacity>

      <View style={{marginLeft: SIZES.ten}}>
        <Text style={[FONTS.mediumFont16, styles.headerTitle]}>
          {title || 'Hey Jimmy!'}
        </Text>
        <Text style={[FONTS.mediumFont12, {color: COLORS.textGrey}]}>
          {subTitle || 'Rock on'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: SIZES.twenty,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight * 2
        : SIZES.twentyFive * 1.5,
  },
  profileImgStyle: {
    height: SIZES.fifty,
    width: SIZES.fifty,
    borderRadius: SIZES.fifty,
    borderWidth: 2,
    borderColor: COLORS.brownGray,
  },
  headerTitle: {
    color: COLORS.white,
  },
});
