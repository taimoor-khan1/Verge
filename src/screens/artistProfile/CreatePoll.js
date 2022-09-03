import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CommonButton, CustomHeader, EditText} from '../../components';
import {COLORS, height, SIZES, STYLES} from '../../constants';
import {useKeyboard} from '../../hooks/useKeyboard';

const initialOptions = [
  {
    label: 'Option',
    value: '',
  },
  {
    label: 'Option',
    value: '',
  },
];

export default function CreatePoll(props) {
  const {navigation} = props;
  const {keyboardShown} = useKeyboard();
  const [question, setQuestion] = useState('');
  const [duration, setDuration] = useState('');
  const [options, setOptions] = useState(initialOptions);

  const onSetOption = (text, index) => {
    const temp = [...options];
    temp[index].value = text;
    setOptions(temp);
  };

  const onAddOptions = () => {
    const temp = [...options];
    temp.push({
      label: 'Option',
      value: '',
    });
    setOptions(temp);
  };

  return (
    <View style={[STYLES.container, {paddingTop: 0}]}>
      <View style={styles.headerStyle}>
        <CustomHeader hasBackArrow title="Create Poll" />
      </View>

      <View style={{height: SIZES.ten}} />

      <ScrollView contentContainerStyle={styles.mainView}>
        <EditText
          value={question}
          label={'Add Question'}
          onChangeText={setQuestion}
        />

        {options.map((item, index) => (
          <EditText
            value={item?.value}
            label={`${item?.label} ${index + 1}`}
            onChangeText={text => onSetOption(text, index)}
          />
        ))}

        <CommonButton
          title="+ Add option"
          onPress={onAddOptions}
          btnStyle={styles.borderBtnStyle}
          titleStyle={styles.btnTitleStyle}
        />

        <EditText
          value={duration}
          label={'Poll Duration'}
          onChangeText={setDuration}
        />
      </ScrollView>

      {!keyboardShown && (
        <CommonButton
          title="Done"
          btnStyle={styles.btnStyle}
          onPress={() => navigation.goBack()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: height * 0.07,
    backgroundColor: COLORS.purple,
    paddingBottom: SIZES.twentyFive,
    borderBottomLeftRadius: SIZES.fifteen,
  },
  mainView: {
    flexGrow: 1,
    padding: SIZES.fifteen,
    marginTop: SIZES.fifteen,
  },
  btnStyle: {
    margin: SIZES.fifteen,
    marginBottom: SIZES.twentyFive,
  },
  borderBtnStyle: {
    marginVertical: SIZES.twenty,
    height: SIZES.twenty * 2.4,
    borderWidth: 1,
    borderColor: COLORS.textGrey,
    borderRadius: SIZES.ten,
    backgroundColor: COLORS.transparent,
  },
  btnTitleStyle: {
    fontSize: SIZES.fifteen,
  },
});
