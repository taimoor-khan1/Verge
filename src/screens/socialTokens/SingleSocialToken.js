import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {CommonButton, CustomHeader, EditText, Row} from '../../components';
import {useKeyboard} from '../../hooks/useKeyboard';
import {
  STYLES,
  FONTS,
  IMAGES,
  COLORS,
  SIZES,
  SCREENS,
} from './../../constants/theme';

export default function SingleSocialToken(props) {
  const {navigation, route} = props;
  const {item} = route.params;
  const {keyboardShown} = useKeyboard();
  const [myQuantity, setMyQuantity] = useState('0');
  const [estimatedValue, setEstimatedValue] = useState('0.00');

  const Entity = ({icon, type, field, title}) => {
    return (
      <View style={styles.EditContainer}>
        <Text style={[FONTS.boldFont20, styles.tags]}>{field}</Text>
        <Text style={[FONTS.boldFont24, styles.Heading]}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={item.title} />

      <View style={{flex: 1, marginTop: SIZES.twenty}}>
        <Row style={[{alignItems: 'center'}, styles.item]}>
          <Image source={IMAGES.profileImage} style={styles.imageStyle} />

          <View style={styles.item}>
            <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
              {item.title}
            </Text>
            <Text
              style={[
                FONTS.mediumFont10,
                {color: COLORS.textGrey, marginTop: SIZES.five},
              ]}>
              Price: ${item.price}
            </Text>
          </View>
        </Row>

        <View
          style={{marginHorizontal: SIZES.fifteen, marginTop: SIZES.fifteen}}>
          <EditText
            label="My Quantity"
            value={myQuantity}
            onChangeText={setMyQuantity}
            returnKeyType="next"
          />

          <View style={{marginTop: SIZES.twenty}}>
            <EditText
              editable={false}
              label="Estimated USD Value"
              value={`$${estimatedValue} USD`}
              onChangeText={setEstimatedValue}
              returnKeyType="next"
            />
          </View>
        </View>
      </View>

      {!keyboardShown && (
        <CommonButton
          title="Donate Now"
          btnStyle={styles.btnStyle}
          onPress={() => navigation.navigate(SCREENS.ArtistProfile)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: SIZES.fifteen,
    marginVertical: SIZES.ten,
  },
  imageStyle: {
    borderWidth: 2,
    height: SIZES.fifty * 0.8,
    width: SIZES.fifty * 0.8,
    borderRadius: SIZES.fifty,
    borderColor: COLORS.brownGray,
  },
  EditContainer: {
    paddingHorizontal: SIZES.twenty,
    marginTop: SIZES.fifteen,
  },
  tags: {
    paddingVertical: SIZES.ten,
    color: COLORS.gray,
  },
  Heading: {
    color: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    paddingBottom: SIZES.ten,
    paddingVertical: SIZES.twenty,
  },
  btnStyle: {
    margin: SIZES.fifteen,
    marginBottom: SIZES.twentyFive,
  },
});
