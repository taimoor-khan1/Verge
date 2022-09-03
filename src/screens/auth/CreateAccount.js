import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserType} from '../../redux/slices/userType';
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants';
import {
  Row,
  CustomHeader,
  CustomButton,
  MyTouchableOpacity,
} from '../../components';

export default function CreateAccount({navigation}) {
  const dispatch = useDispatch();
  const userType = useSelector(state => state.UserType.value);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [errorText, setErrorText] = useState('');

  const onPressContinue = () => {
    if (!isTypeSelected) {
      setErrorText('Please select an account type to continue');
      return;
    }

    navigation.navigate(
      userType === CONSTANTS.USER_TYPE.USER
        ? SCREENS.PersonalitySurvey
        : SCREENS.SignUp,
    );
    setErrorText('');
  };

  const SelectorButton = ({title, description, image, selected, type}) => (
    <MyTouchableOpacity
      style={{
        backgroundColor: `${COLORS.lightPurple}10`,
        paddingHorizontal:
          Platform.OS === 'ios' ? SIZES.twenty : SIZES.twentyFive,
        paddingVertical: Platform.OS === 'ios' ? SIZES.ten : SIZES.fifteen,
        borderColor: `${COLORS.brownGray}10`,
        borderWidth: selected ? 2 : 0,
        borderColor: selected ? COLORS.purple : COLORS.transparent,
        borderRadius: SIZES.ten,
        marginTop: SIZES.twentyFive,
      }}
      onPress={() => {
        dispatch(setUserType(type));
        setIsTypeSelected(true);
        setErrorText('');
      }}>
      <Row style={{alignItems: 'center'}}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={{height: SIZES.fifty * 1.35, width: SIZES.fifty * 1.35}}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.fifteen,
            justifyContent: 'space-between',
          }}>
          <Text
            numberOfLines={1}
            style={[FONTS.boldFont18, {color: COLORS.white}]}>
            {title}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.textGrey,
                maxWidth: width * 0.62,
                marginTop: SIZES.ten,
              },
            ]}>
            {description}
          </Text>
        </View>
      </Row>
    </MyTouchableOpacity>
  );

  return (
    <View style={[STYLES.container]}>
      <CustomHeader hasBackArrow />

      <View style={{padding: SIZES.twenty}}>
        <Text
          style={[
            FONTS.boldFont22,
            {
              textAlign: 'center',
              color: COLORS.white,
              textTransform: 'capitalize',
              marginTop: SIZES.twentyFive * 1.3,
            },
          ]}>
          Create an account
        </Text>
        <Text
          style={[
            FONTS.mediumFont12,
            {
              textAlign: 'center',
              color: COLORS.textGrey,
              textTransform: 'capitalize',
              marginTop: SIZES.ten,
            },
          ]}>
          Which type of account would you like?
        </Text>

        <View style={{marginTop: SIZES.fifteen, marginBottom: SIZES.fifty}}>
          <SelectorButton
            title={'Register as Artist'}
            description={'Lorem ipsum dicolora amit sed consec fluid'}
            image={IMAGES.asArtistIcon}
            selected={userType === CONSTANTS.USER_TYPE.ARTIST && isTypeSelected}
            type={CONSTANTS.USER_TYPE.ARTIST}
          />
          <SelectorButton
            title={'Register as User'}
            description={'Lorem ipsum dicolora amit sed consec fluid'}
            image={IMAGES.asUserIcon}
            selected={userType === CONSTANTS.USER_TYPE.USER && isTypeSelected}
            type={CONSTANTS.USER_TYPE.USER}
          />
        </View>

        {errorText !== '' && (
          <Text
            style={[
              FONTS.mediumFont12,
              {
                textAlign: 'center',
                color: COLORS.textColor,
                margintop: SIZES.fifteen,
                marginBottom: SIZES.twentyFive,
              },
            ]}>
            {errorText}
          </Text>
        )}

        <CustomButton
          label={'Continue'}
          style={{
            marginVertical:
              Platform.OS === 'android' ? SIZES.twentyFive * 1.2 : SIZES.twenty,
          }}
          onPress={onPressContinue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
