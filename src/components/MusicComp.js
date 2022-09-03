import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, IMAGES, SIZES} from '../constants';
import MyTouchableOpacity from './MyTouchableOpacity';

export default function MusicComp(props) {
  const {title, subTitle, onPress, style} = props;

  return (
    <MyTouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.iconView}>
          <Image
            resizeMode="contain"
            source={IMAGES.musicListIcon}
            style={styles.iconStyle}
          />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text
          numberOfLines={1}
          style={[FONTS.boldFont16, {color: COLORS.white}]}>
          {title}
        </Text>

        {subTitle && (
          <Text
            numberOfLines={1}
            style={[
              FONTS.mediumFont12,
              {color: COLORS.textGrey, marginTop: SIZES.five},
            ]}>
            {subTitle}
          </Text>
        )}
      </View>
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SIZES.fifty * 1.3,
    borderRadius: SIZES.ten,
    backgroundColor: COLORS.background,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.fifty * 1.3,
    width: SIZES.fifty * 1.4,
    backgroundColor: COLORS.purple,
    borderRadius: SIZES.ten,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.twentyFive * 2,
    width: SIZES.twentyFive * 2,
    borderRadius: SIZES.twentyFive * 2,
    backgroundColor: `${COLORS.black}40`,
  },
  iconStyle: {
    height: SIZES.twenty,
    width: SIZES.twenty,
    tintColor: COLORS.white,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: SIZES.twenty,
  },
});
