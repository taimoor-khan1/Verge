import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import CommonButton from './CommonButton';
import Icon, {IconType} from './Icons';
import moment from 'moment';

export default function PostComp(props) {
  const {item} = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const checkHighestPercentage = () => {
    return Math.max(...item.options.map(i => i.percentage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image resizeMode="cover" source={item.image} style={styles.imgStyle} />

        <MyTouchableOpacity style={styles.contentView}>
          <View style={[styles.flexRow, {alignItems: 'flex-end'}]}>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont14, {color: COLORS.white}]}>
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                FONTS.lightFont08,
                {
                  marginBottom: 2,
                  marginLeft: SIZES.ten,
                  color: COLORS.textGrey,
                },
              ]}>
              created this poll
            </Text>
          </View>

          <Text
            numberOfLines={1}
            style={[FONTS.lightFont08, {color: COLORS.textGrey, marginTop: 2}]}>
            {moment(item.date).format('DD MMMM')}, at{' '}
            {moment(item.date).format('hh:mm')}
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
          {
            color: COLORS.white,
            marginTop: SIZES.twentyFive,
          },
        ]}>
        {item.title}
      </Text>

      <Text
        style={[
          FONTS.mediumFont12,
          {
            color: COLORS.white,
            marginTop: SIZES.twenty,
          },
        ]}>
        {item.subTitle}
      </Text>

      <View style={{marginTop: SIZES.twentyFive}}>
        {item.pollEnded
          ? item.options.map((item, index) => (
              <View key={index} style={styles.optionContainer}>
                <Text
                  numberOfLines={1}
                  style={[FONTS.mediumFont16, styles.optionTitleStyle]}>
                  {item.title}
                </Text>

                <View
                  style={{
                    minWidth: '20%',
                    maxWidth: '70%',
                    width: `${item.percentage}%`,
                  }}>
                  <CommonButton
                    disabled={true}
                    title={`${item.percentage}%`}
                    btnStyle={
                      checkHighestPercentage() === item.percentage
                        ? styles.btnStyle
                        : styles.borderBtnStyle
                    }
                  />
                </View>
              </View>
            ))
          : item.options.map((item, index) => (
              <View style={{marginBottom: SIZES.twenty}}>
                <CommonButton
                  key={index}
                  title={item.title}
                  onPress={() => setSelectedOption(item.title)}
                  btnStyle={
                    selectedOption === item.title
                      ? styles.btnStyle
                      : styles.borderBtnStyle
                  }
                />
              </View>
            ))}
      </View>

      {item.pollEnded && (
        <Text style={[FONTS.mediumFont10, {color: COLORS.pink}]}>
          {item.votes} votes poll is closed
        </Text>
      )}

      <View style={styles.lineSeparator} />

      <View style={styles.flexRow}>
        <MyTouchableOpacity style={styles.likeBtnView}>
          <Icon
            name="like2"
            type={IconType.AntDesign}
            color={COLORS.white}
            size={SIZES.twenty * 1.3}
          />
          <Text
            style={[
              FONTS.mediumFont10,
              {color: COLORS.white, marginHorizontal: SIZES.five},
            ]}>
            {item.likes}
          </Text>
          <Text style={[FONTS.mediumFont10, {color: COLORS.white}]}>Likes</Text>
        </MyTouchableOpacity>

        <MyTouchableOpacity style={styles.likeBtnView}>
          <Icon
            name="dislike2"
            type={IconType.AntDesign}
            color={COLORS.textGrey}
            size={SIZES.twenty * 1.3}
          />
          <Text
            style={[
              FONTS.mediumFont10,
              {color: COLORS.textGrey, marginHorizontal: SIZES.five},
            ]}>
            {item.dislikes}
          </Text>
          <Text style={[FONTS.mediumFont10, {color: COLORS.textGrey}]}>
            Dislikes
          </Text>
        </MyTouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.twentyFive,
    marginHorizontal: SIZES.fifteen,
    backgroundColor: COLORS.darkBackground,
    borderRadius: SIZES.ten,
    padding: SIZES.twenty,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentView: {
    flex: 1,
    marginHorizontal: SIZES.fifteen,
  },
  imgStyle: {
    height: SIZES.twenty * 2,
    width: SIZES.twenty * 2,
    borderRadius: SIZES.twentyFive * 2,
  },
  lineSeparator: {
    borderWidth: 1,
    borderColor: COLORS.darkPurple,
    marginTop: SIZES.twenty,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeBtnView: {
    flex: 1,
    marginTop: SIZES.fifteen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 2.5,
  },
  borderBtnStyle: {
    height: SIZES.twenty * 2.5,
    borderWidth: 1,
    borderColor: COLORS.textGrey,
    borderRadius: SIZES.fifteen,
    backgroundColor: COLORS.transparent,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.twenty,
  },
  optionTitleStyle: {
    flex: 1,
    color: COLORS.white,
    marginRight: SIZES.ten,
  },
});
