import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon, {IconType} from './Icons';

export default function SongListComp(props) {
  const {item} = props;

  return (
    <View style={styles.container}>
      <MyTouchableOpacity style={styles.playBtnStyle}>
        <Icon
          name="play"
          type={IconType.FontAwesome5}
          color={COLORS.white}
          size={SIZES.fifteen}
        />
      </MyTouchableOpacity>

      <MyTouchableOpacity style={styles.contentView}>
        <Text
          numberOfLines={1}
          style={[FONTS.mediumFont16, {color: COLORS.white}]}>
          {item.title}
        </Text>
        <Text
          numberOfLines={1}
          style={[FONTS.mediumFont12, {color: COLORS.textGrey}]}>
          {item.subTitle}
        </Text>
      </MyTouchableOpacity>

      <Text style={[FONTS.mediumFont10, {color: COLORS.textGrey}]}>
        {item.duration}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.twenty,
  },
  playBtnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.twenty * 2.7,
    height: SIZES.twenty * 2.7,
    borderRadius: SIZES.fifty,
    backgroundColor: COLORS.purple,
  },
  contentView: {
    flex: 1,
    marginHorizontal: SIZES.fifteen,
  },
});
