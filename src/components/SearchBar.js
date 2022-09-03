import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon, {IconType} from './Icons';

export default function SearchBar(props) {
  const {value, onChangeText, onSearchPress, style, placeholder} = props;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        placeholder={placeholder || 'Search...'}
        placeholderTextColor={COLORS.textGrey}
        style={[FONTS.mediumFont12, styles.textInputStyle]}
        onChangeText={text => onChangeText(text)}
      />

      <MyTouchableOpacity style={styles.iconStyle} onPress={onSearchPress}>
        <Icon
          name={'search1'}
          type={IconType.AntDesign}
          color={COLORS.white}
          size={SIZES.fifteen * 1.5}
        />
      </MyTouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.fifty * 0.8,
    borderRadius: SIZES.ten,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkPurple,
    marginHorizontal: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
    borderWidth: 0,
    borderColor: COLORS.transparent,
  },
  textInputStyle: {
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: SIZES.ten,
  },
  iconStyle: {
    alignItems: 'flex-end',
  },
});
