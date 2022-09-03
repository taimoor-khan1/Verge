import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, STYLES, IMAGES, FONTS, SCREENS} from '../../constants';
import {
  CustomHeader,
  Row,
  Icon,
  IconType,
  MyTouchableOpacity,
} from '../../components';
import CircleImage from '../../components/CircleImage';

export default function Setting(props) {
  const {navigation, route} = props;
  const RowText = ({title, icon, type, onPress}) => {
    return (
      <MyTouchableOpacity
        onPress={onPress}
        style={[styles.optionButton, {paddingBottom: SIZES.fifteen * 2}]}>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name={icon}
            type={type}
            color={COLORS.white}
            size={SIZES.twentyFive}
          />
          <Text
            style={[
              FONTS.mediumFont14,
              {color: COLORS.white, paddingHorizontal: SIZES.twenty},
            ]}>
            {title}
          </Text>
        </Row>

        <Icon
          name="right"
          type={IconType.AntDesign}
          color={COLORS.white}
          size={SIZES.twenty}
        />
      </MyTouchableOpacity>
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={'Setting'} />
      <View style={{paddingHorizontal: SIZES.twenty}}>
        <Row style={styles.Header}>
          <CircleImage
            style={{
              height: SIZES.fifty,
              width: SIZES.fifty,
              borderRadius: SIZES.fifty,
              borderWidth: 2,
              borderColor: COLORS.brownGray,
            }}
          />

          <View
            style={{
              justifyContent: 'center',
              marginHorizontal: SIZES.fifteen,
            }}>
            <Text
              style={[
                FONTS.mediumFont14,
                {color: COLORS.white, marginBottom: SIZES.ten},
              ]}>
              Valetudo Beats
            </Text>
            <Text style={[FONTS.mediumFont12, {color: COLORS.gray}]}>
              Canada
            </Text>
          </View>
        </Row>
        <View style={styles.option}>
          <RowText
            title={'Notification'}
            icon={'ios-notifications-outline'}
            type={IconType.Ionicons}
            onPress={() => {
              navigation.navigate(SCREENS.NotificationSettings);
            }}
          />
          <RowText
            title={'Payment'}
            icon={'credit-card'}
            type={IconType.Feather}
            onPress={() => {
              navigation.navigate(SCREENS.Payment);
            }}
          />
          <RowText
            title={'About App'}
            icon={'info'}
            type={IconType.Feather}
            onPress={() => {
              navigation.navigate(SCREENS.AboutApp);
            }}
          />
          <RowText
            title={'Terms & Conditions'}
            icon={'newspaper-outline'}
            type={IconType.Ionicons}
            onPress={() => {
              navigation.navigate(SCREENS.TermsAndConidtion);
            }}
          />
        </View>
        <MyTouchableOpacity style={styles.BottomButton}>
          <Row style={{alignItems: 'center'}}>
            <Image
              source={IMAGES.headPhone}
              style={{
                width: SIZES.fifteen * 2.65,
                height: SIZES.fifteen * 2.65,
                marginRight: SIZES.twenty,
              }}
              resizeMode={'contain'}
            />

            <Text style={[FONTS.mediumFont16, {color: COLORS.textColor}]}>
              How can we help you
            </Text>
          </Row>
        </MyTouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    paddingVertical: SIZES.twenty,
    borderBottomWidth: 1,
    borderColor: `${COLORS.white}80`,
    alignItems: 'center',
  },
  option: {
    marginVertical: SIZES.twenty,
    borderRadius: SIZES.ten,
    padding: SIZES.fifteen,
    backgroundColor: COLORS.darkPurple,
    justifyContent: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SIZES.ten * 2,
  },
  BottomButton: {
    backgroundColor: COLORS.purpleShade,
    justifyContent: 'center',
    padding: SIZES.twenty,
    borderRadius: SIZES.fifteen,
  },
});
