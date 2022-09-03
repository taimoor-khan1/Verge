import {StyleSheet} from 'react-native';
import {COLORS, SIZES, width} from '../../constants';

export default StyleSheet.create({
  mainView: {
    marginTop: SIZES.fifteen,
    alignItems: 'center',
  },
  carouselView: {
    borderRadius: SIZES.ten,
    backgroundColor: COLORS.purpleShade,
  },
  sliderImgStyle: {
    height: width * 0.75,
    width: width * 0.75,
    borderRadius: SIZES.ten,
  },
  headerStyle: {
    marginTop: 0,
    padding: SIZES.ten,
  },
  headerImgStyle: {
    height: SIZES.twentyFive * 1.7,
    width: SIZES.twentyFive * 1.7,
  },
  playIconStyle: {
    top: '40%',
    alignSelf: 'center',
    position: 'absolute',
  },
});
