import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {TabBar, TabBarIndicator, TabBarItem} from 'react-native-tab-view';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../constants';

const {width} = Dimensions.get('window');

export default function ScrollTabBar(props) {
  return (
    <TabBar
      {...props}
      pressOpacity={0.85}
      scrollEnabled={false}
      indicatorStyle={{
        height: 5,
        borderRadius: SIZES.fifteen,
        backgroundColor: COLORS.purple,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          numberOfLines={1}
          style={[
            FONTS.mediumFont16,
            styles.labelStyle,
            {color: focused ? COLORS.white : COLORS.textGrey},
          ]}>
          {route.title}
        </Text>
      )}
      //   renderIndicator={indicatorProps => (
      //     <TabBarIndicator
      //       {...indicatorProps}
      //       width={width}
      //       style={{
      //         backgroundColor: COLORS.white,
      //       }}
      //     />
      //   )}
      style={{backgroundColor: COLORS.primary, paddingTop: SIZES.twentyFive}}
    />
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    textTransform: 'capitalize',
  },
});
