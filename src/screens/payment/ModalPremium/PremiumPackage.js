import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton, MyTouchableOpacity, Row} from '../../../components';
import {
  SIZES,
  COLORS,
  FONTS,
  width,
  height,
  SCREENS,
} from './../../../constants/theme';

export default function PremiumPackage(props) {
  const {visible, setVisible} = props;
  const navigation = useNavigation();

  const Packages = ({save, month, perMonth}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.fifteen,
          width: width * 0.25,
          height: height * 0.2,
          marginVertical: SIZES.twenty,
          marginRight: SIZES.twenty,
        }}>
        {save ? (
          <View
            style={{
              backgroundColor: COLORS.lightPurple,
              width: '100%',
              borderTopRightRadius: SIZES.fifteen - 1,
              borderTopLeftRadius: SIZES.fifteen - 1,
              alignItems: 'center',
            }}>
            <Text
              style={[
                FONTS.mediumFont12,
                {color: COLORS.white, padding: SIZES.five},
              ]}>
              save {save}%
            </Text>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '100%',
              borderTopRightRadius: SIZES.fifteen - 1,
              borderTopLeftRadius: SIZES.fifteen - 1,
              alignItems: 'center',
            }}>
            <Text
              style={[
                FONTS.mediumFont12,
                {color: COLORS.white, padding: SIZES.five},
              ]}>
              {' '}
            </Text>
          </View>
        )}

        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={FONTS.boldFont24}>{month}</Text>
          <Text style={FONTS.boldFont16}>Months</Text>
          <Text style={FONTS.boldFont16}>${perMonth}.00/mt</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={visible} animationType={'slide'} transparent>
      <MyTouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: SIZES.twenty,
          backgroundColor: `${COLORS.black}80`,
        }}
        onPress={() => setVisible(false)}>
        <View style={styles.container}>
          <Row style={{justifyContent: 'center', marginBottom: SIZES.twenty}}>
            <Text style={[FONTS.boldFont24, {color: COLORS.white}]}>
              Upgrade to
            </Text>
            <Text style={[FONTS.boldFont24, {color: COLORS.textColor}]}>
              {' '}
              Premium
            </Text>
          </Row>
          <Text style={[FONTS.mediumFont12, styles.regularText]}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi
          </Text>
          <Row>
            <Packages save={'66'} month={'12'} perMonth={'6'} />
            <Packages save={'33'} month={'3'} perMonth={'9'} />
            <Packages month={'1'} perMonth={'12'} />
          </Row>

          <CustomButton
            label={'Get 3 Months / $9.00'}
            onPress={() => {
              setVisible(false);
              navigation.navigate(SCREENS.GoPremium);
            }}
          />
          <Text style={[FONTS.boldFont18, styles.h2]}>
            Does My Subscription Auto Renew?
          </Text>
          <Text style={[FONTS.mediumFont12, styles.regularText]}>
            Yes, You can disable this at any time with just one tap in the app
            store.
          </Text>
        </View>
      </MyTouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.fifteen,
    backgroundColor: COLORS.darkPurple,
    borderRadius: SIZES.ten,
  },
  regularText: {
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: SIZES.fifteen,
  },
  h2: {
    color: COLORS.white,
    textAlign: 'center',
    marginTop: SIZES.twentyFive,
    margin: SIZES.fifteen,
  },
});
