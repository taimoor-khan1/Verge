import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, height, SIZES, width} from '../../constants';

export default StyleSheet.create({
  container: {},
  cardContainer: {
    margin: width * 0.05,
    height: SIZES.fifty * 2.8,
    width: SIZES.fifty * 2.25,
  },
  imgStyle: {
    marginTop: -SIZES.five * 1.5,
    alignSelf: 'center',
    height: SIZES.fifty * 1.5,
    width: SIZES.fifty * 1.5,
    borderRadius: SIZES.ten,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: SIZES.twentyFive,
    color: COLORS.white,
  },
  flatlist: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: SIZES.twenty,
    paddingBottom: height * 0.15,
  },
});
