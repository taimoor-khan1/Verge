import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Dimensions} from 'react-native';
import {CustomHeader, CustomTabs, SearchBar} from '../../components';
import {STYLES, SIZES} from '../../constants/theme';

export default function SearchScreen(props) {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={STYLES.container}>
      <CustomHeader hasBackArrow title="Search " />

      <View style={{marginTop: SIZES.twentyFive}}>
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onSearchPress={() => {}}
        />
      </View>

      <CustomTabs />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
