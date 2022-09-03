import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {
  STYLES,
  SIZES,
  COLORS,
  FONTS,
  SCREENS,
  IMAGES,
  width,
  height,
} from './../../constants/theme';
import {CustomHeader, Row, Icon, IconType} from '../../components';
import CustomButton from './../../components/CustomButton';

export default function GoPremium(props) {
  const {navigation} = props;
  const Featheritem = ({content}) => {
    return (
      <Row style={{marginTop: SIZES.twenty}}>
        <View style={STYLES.shadow}>
          <Icon
            name={'check'}
            type={IconType.Entypo}
            color={COLORS.white}
            size={SIZES.fifteen}
            style={styles.featureIcon}
          />
        </View>
        <Text style={[styles.featureText, FONTS.mediumFont12]}>{content}</Text>
      </Row>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={'Go Premium'} />
      <Image
        source={IMAGES.PremiumMusic}
        resizeMode={'contain'}
        style={styles.imageStyle}
      />
      <View style={styles.featureContainer}>
        <Text
          style={[
            FONTS.mediumFont16,
            {color: COLORS.white, marginBottom: SIZES.fifteen},
          ]}>
          Premium Features:
        </Text>
        <Featheritem content={'Excepteur sint occaecat cupidatat'} />
        <Featheritem
          content={
            'Sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        />
        <Featheritem content={'Tempor incididunt ut labore et dolore'} />
        <Featheritem content={'Tempor incididunt ut labore et dolore'} />
      </View>
      <CustomButton
        onPress={() => {
          navigation.navigate(SCREENS.PaymentMethod);
        }}
        label={'Go Premium'}
        style={{margin: SIZES.twenty}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    color: COLORS.textColor,
    marginBottom: SIZES.ten,
  },
  featureContainer: {
    paddingHorizontal: SIZES.twentyFive,
    marginVertical: SIZES.fifteen,
    flex: 1,
  },
  featureText: {
    color: COLORS.gray,
    paddingHorizontal: SIZES.fifteen,
  },
  featureIcon: {
    backgroundColor: COLORS.purple,
    padding: SIZES.five,
    borderRadius: SIZES.twentyFive,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: width * 0.25,
    height: width * 0.25,
    alignSelf: 'flex-end',
    marginVertical: SIZES.twentyFive,
    marginRight: SIZES.fifteen,
  },
});
