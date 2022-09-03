import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CustomButton, CustomHeader, EditText} from '../../components';
import {COLORS, FONTS, SCREENS, SIZES, STYLES} from '../../constants';
import utils from '../../utils';

export default function ForgotPassword(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState('');

  const onPressContinue = () => {
    if (utils.isEmpty(email)) {
      setErrorText('Please enter an email address');
      return;
    }
    if (!utils.validateEmail(email)) {
      setErrorText("Email doesn't exist");
      return;
    }

    navigation.navigate(SCREENS.Verification);
    setErrorText('');
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: SIZES.fifteen,
          justifyContent: 'center',
        }}>
        <View style={{marginBottom: SIZES.fifteen}}>
          <Text
            style={[
              FONTS.boldFont24,
              {color: COLORS.white, textAlign: 'center'},
            ]}>
            Forgot Password?
          </Text>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.textGrey,
                textAlign: 'center',
                marginHorizontal: SIZES.twentyFive * 1.5,
                marginTop: SIZES.fifteen,
                marginBottom: SIZES.ten,
              },
            ]}>
            Enter your email & we will send you a verification code
          </Text>
        </View>

        <EditText
          email
          label="Email"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          secureTextEntry={true}
          password={false}
        />

        {errorText !== '' && (
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.textColor,
                textAlign: 'center',
                marginVertical: SIZES.twentyFive,
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
      </ScrollView>
    </View>
  );
}
