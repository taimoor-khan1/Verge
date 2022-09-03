import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export default function AboutMeComp() {
  return (
    <View>
      <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
        Consectetur Adipiscing Elit
      </Text>
      <Text
        style={[
          FONTS.mediumFont12,
          {color: COLORS.textGrey, marginTop: SIZES.fifteen},
        ]}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo conse quat.
      </Text>
      <Text
        style={[
          FONTS.mediumFont12,
          {color: COLORS.textGrey, marginTop: SIZES.fifteen},
        ]}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </Text>
      <Text
        style={[
          FONTS.mediumFont12,
          {color: COLORS.textGrey, marginTop: SIZES.fifteen},
        ]}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  );
}
