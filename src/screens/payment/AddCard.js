import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CreditCardInput} from '../../components/StripCardComponent';
import {CustomButton, CustomHeader} from './../../components';
import {STYLES, SIZES, COLORS} from './../../constants/theme';

export default function AddCard(props) {
  const {navigation} = props;
  const [CardInput, setCardInput] = React.useState({});
  const _onChange = data => {
    setCardInput(data);
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title="Add Card" />

      <ScrollView
        contentContainerStyle={{flexGrow: 1, marginVertical: SIZES.fifteen}}>
        <CreditCardInput
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          validColor="#000"
          placeholderColor={COLORS.white}
          requiresName={true}
          onChange={_onChange}
        />

        <CustomButton
          label={'Save & Continue'}
          style={{margin: SIZES.twenty, bottom: 0}}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: COLORS.gray,
    padding: SIZES.ten,
    color: COLORS.white,
    borderBottomWidth: 1,
  },
  inputStyle: {
    color: COLORS.white,
  },
  labelStyle: {
    color: COLORS.gray,
  },
  placeholderColor: {
    color: COLORS.white,
  },
});
