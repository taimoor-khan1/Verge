import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {STYLES, SIZES, COLORS, FONTS, SCREENS} from './../../constants/theme';
import {CustomHeader, Row, Icon, IconType} from '../../components';
import Donut from '../../components/DonutView';

export default function Payment({navigation}) {
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
      <CustomHeader hasBackArrow title={'Payments'} />
      <Row
        style={{
          white: '100%',
          paddingHorizontal: SIZES.twenty,
          marginTop: SIZES.twentyFive,
        }}>
        <View style={{width: '60%'}}>
          <Text style={[FONTS.boldFont24, styles.amount]}>$9.00</Text>
          <Text
            style={[
              FONTS.mediumFont18,
              {color: COLORS.white, marginVertical: SIZES.ten},
            ]}>
            Adipsicing Eluit
          </Text>
          <Text style={[FONTS.mediumFont12, {color: COLORS.gray}]}>
            Ut enim ad minim veniam, quis nostrud exercitation u llamco laboris
            nisi...
          </Text>
        </View>
        <Donut percentage={6} color={COLORS.textColor} delay={10} max={10} />
      </Row>
      <View style={styles.featureContainer}>
        <Text style={[FONTS.mediumFont18, {color: COLORS.white}]}>
          Features:
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
      <Text style={[FONTS.mediumFont14, styles.footerText]}>
        Once, Your subscription is expired you will be able to renew easily
      </Text>
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
    marginVertical: SIZES.twentyFive,
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
  footerText: {
    marginTop: SIZES.twentyFive,
    textAlign: 'center',
    paddingHorizontal: SIZES.twentyFive,
    color: COLORS.gray,
  },
});
