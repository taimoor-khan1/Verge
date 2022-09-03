import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/theme';

const Card = props => {
  return (
    <TouchableOpacity
      disabled={props.onPress ? false : true}
      activeOpacity={0.85}
      onPress={props.onPress}
      style={[styles.card, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // backgroundColor: COLORS.white,
    shadowColor: COLORS.lightPurple,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    elevation: 2,
  },
});
