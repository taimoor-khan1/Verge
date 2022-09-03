import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';

export default function CommonButton(props) {
  const {title, btnStyle, titleStyle, onPress, disabled} = props;

  return (
    <MyTouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, btnStyle]}>
      <Text style={[FONTS.mediumFont16, styles.textStyle, titleStyle]}>
        {title}
      </Text>
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.twenty * 3,
    borderRadius: SIZES.ten,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.purple,
    paddingHorizontal: SIZES.twenty,
  },
  textStyle: {
    color: COLORS.white,
  },
});
