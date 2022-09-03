import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CustomButton, CustomHeader} from './../../components';
import CardView from './../../components/CardView';
import {
  STYLES,
  SIZES,
  COLORS,
  SCREENS,
  FONTS,
  width,
  height,
} from './../../constants';

export default function PaymentMethod(props) {
  const {navigation} = props;

  _renderItem = ({item, index}) => {
    return (
      <CardView
        userName={item.userName}
        cardNo={item.CardNo}
        ExpireDate={item.expDate}
      />
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title="Payment Method" />

      <View style={{flex: 1}}>
        <Carousel
          data={data}
          layout={'stack'}
          layoutCardOffset={`18`}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnAddCard}
          onPress={() => {
            navigation.navigate(SCREENS.AddCard);
          }}>
          <Text style={[FONTS.mediumFont18, {color: COLORS.gray}]}>
            Add Card
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.6, justifyContent: 'center'}}>
        <CustomButton
          label={'Confirm Payment'}
          style={{
            width: width * 0.8,
            alignSelf: 'center',
          }}
          onPress={() => {
            navigation.navigate(SCREENS.Home);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAddCard: {
    borderRadius: SIZES.ten,
    backgroundColor: COLORS.darkPurple,
    width: width * 0.8,
    height: height * 0.25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.gray,
    borderStyle: 'dashed',
  },
});

const data = [
  {
    id: '1',
    CardNo: '**** **** **** 4444',
    userName: 'Shoab',
    expDate: '01/12',
  },
  {
    id: '2',
    CardNo: '**** **** **** 4444',
    userName: 'Taimoor',
    expDate: '01/12',
  },
  {
    id: '3',
    CardNo: '**** **** **** 4444',
    userName: 'Waqas',
    expDate: '01/12',
  },
  {
    id: '4',
    CardNo: '**** **** **** 4444',
    userName: 'Hamza',
    expDate: '01/12',
  },
];
