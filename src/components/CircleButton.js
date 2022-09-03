import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS, SIZES} from '../constants';

export default function CircleButton(props) {
  const {onPress, icon} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.container}>
      <Image resizeMode="contain" source={icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.twenty * 2.8,
    height: SIZES.twenty * 2.8,
    borderRadius: SIZES.twenty * 3,
    backgroundColor: COLORS.purple,
  },
  iconStyle: {
    height: SIZES.twentyFive,
    width: SIZES.twentyFive,
    tintColor: COLORS.white,
  },
});
