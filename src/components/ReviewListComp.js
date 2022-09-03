import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, IMAGES, SIZES} from '../constants';
import Icon, {IconType} from './Icons';

export default function ReviewListComp(props) {
  const {item} = props;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          resizeMode="cover"
          source={{uri: item.image}}
          style={styles.imgStyle}
        />

        <MyTouchableOpacity style={styles.contentView}>
          <Text
            numberOfLines={1}
            style={[FONTS.mediumFont14, {color: COLORS.white}]}>
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[FONTS.mediumFont10, {color: COLORS.textGrey}]}>
            {item.date}
          </Text>
        </MyTouchableOpacity>

        <MyTouchableOpacity>
          <Icon
            name="more-horizontal"
            type={IconType.Feather}
            color={COLORS.white}
            size={SIZES.twenty * 1.5}
          />
        </MyTouchableOpacity>
      </View>

      <Text
        style={[
          FONTS.mediumFont12,
          {color: COLORS.textGrey, marginTop: SIZES.twenty},
        ]}>
        {item.content}
      </Text>

      <View style={[styles.flexRow, {marginTop: SIZES.twenty * 1.5}]}>
        <MyTouchableOpacity style={styles.flexRow}>
          <Image
            resizeMode="contain"
            source={IMAGES.iconReply}
            style={styles.iconStyle}
          />

          <Text
            style={[
              FONTS.mediumFont10,
              {color: COLORS.textGrey, marginLeft: SIZES.ten},
            ]}>
            Reply
          </Text>
        </MyTouchableOpacity>

        <View style={styles.flexRow}>
          <Text
            style={[
              FONTS.mediumFont10,
              {color: COLORS.textGrey, marginRight: SIZES.ten},
            ]}>
            {item.likes}
          </Text>

          <MyTouchableOpacity>
            <Image
              resizeMode="contain"
              source={IMAGES.iconLike}
              style={[styles.iconStyle, {tintColor: COLORS.purple}]}
            />
          </MyTouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingBottom: SIZES.fifteen,
    marginBottom: SIZES.twenty * 1.5,
    borderBottomColor: COLORS.brownGray,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playBtnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.twenty * 2.7,
    height: SIZES.twenty * 2.7,
    borderRadius: SIZES.fifty,
    backgroundColor: COLORS.purple,
  },
  contentView: {
    flex: 1,
    marginHorizontal: SIZES.fifteen,
  },
  imgStyle: {
    height: SIZES.twentyFive * 2,
    width: SIZES.twentyFive * 2,
    borderRadius: SIZES.twentyFive * 2,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: SIZES.twenty * 1.3,
    width: SIZES.twenty * 1.3,
    tintColor: COLORS.white,
  },
});
