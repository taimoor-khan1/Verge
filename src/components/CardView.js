import {StyleSheet, Image, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {IMAGES, width, height, FONTS, COLORS} from '../constants';
import {SIZES} from './../constants/theme';
import Row from './Row';

export default function CardView(props) {
  const {userName, cardNo, ExpireDate} = props;

  return (
    <View
      style={{
        width,
        alignItems: 'center',
        marginTop: SIZES.twentyFive * 1.5,
      }}>
      <ImageBackground
        borderRadius={SIZES.fifteen}
        source={IMAGES.CardFront}
        style={{
          width: width * 0.8,
          height: height * 0.22,
          borderRadius: SIZES.twenty,
          justifyContent: 'space-evenly',
          paddingHorizontal: SIZES.twentyFive,
        }}>
        <Text
          style={[
            FONTS.mediumFont18,
            {
              color: COLORS.white,
            },
          ]}>
          {cardNo}
        </Text>

        <Row
          style={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
            User Name{'\n'}
            {userName}
          </Text>
          <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
            EXP DATE{'\n'}
            {ExpireDate}
          </Text>
        </Row>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
