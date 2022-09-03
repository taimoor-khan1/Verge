import React from 'react';
import {View, Text, Image} from 'react-native';
import {CommonButton} from '../../components';
import {COLORS, FONTS} from '../../constants';
import styles from './style';

export default function CommunityCard(props) {
  const {image, title, onPress} = props;

  return (
    <View style={styles.cardContainer}>
      <View style={{flex: 1}}>
        <Image source={{uri: image}} style={styles.cardImgStyle} />
      </View>

      <View style={styles.cardContentView}>
        <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>{title}</Text>

        <CommonButton
          title="View Community"
          onPress={onPress}
          btnStyle={styles.cardBtnStyle}
          titleStyle={styles.cardBtnTitle}
        />
      </View>
    </View>
  );
}
