import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform, ScrollView} from 'react-native';
import {COLORS, FONTS, SCREENS, SIZES, STYLES} from '../../constants';
import {CustomButton, CustomHeader, EditText} from '../../components';

export default function PersonalitySurvey(props) {
  const {navigation} = props;
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState('');
  const [usage, setUsage] = useState('');
  const [trends, setTrends] = useState('');

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: SIZES.fifteen,
        }}>
        <View
          style={{marginTop: SIZES.twentyFive, marginBottom: SIZES.fifteen}}>
          <Text style={[FONTS.boldFont24, {color: COLORS.white}]}>
            Personality Survey
          </Text>
        </View>

        <View style={{paddingTop: SIZES.twentyFive}}>
          <EditText
            label="Preferred Genre"
            value={genre}
            autoCapitalize
            onChangeText={setGenre}
            returnKeyType="next"
            secureTextEntry={true}
            password={false}
          />
          <EditText
            label="Preferred Artist"
            value={artist}
            onChangeText={setArtist}
            returnKeyType="next"
            secureTextEntry={true}
            password={false}
          />
          <EditText
            label="App Usage"
            value={usage}
            onChangeText={setUsage}
            returnKeyType="next"
            secureTextEntry={true}
            password={false}
          />
          <EditText
            label="Preferred Trends"
            value={trends}
            onChangeText={setTrends}
            returnKeyType="next"
          />
        </View>

        <CustomButton
          label={'Submit'}
          style={{
            marginVertical:
              Platform.OS === 'android' ? SIZES.twentyFive * 1.2 : SIZES.twenty,
          }}
          onPress={() => navigation.navigate(SCREENS.SignUp)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
