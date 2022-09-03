import {StyleSheet} from 'react-native';
import {COLORS, height, SIZES, width} from '../../constants';

export default StyleSheet.create({
  header: {
    zIndex: 10,
    height: 60,
    position: 'relative',
    borderBottomWidth: 0,
    backgroundColor: COLORS.primary,
    borderBottomColor: COLORS.primary,
  },
  playBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.fifteen,
    marginBottom: SIZES.twentyFive,
  },
  playBtnStyle: {
    height: SIZES.fifty,
    width: SIZES.fifty,
    borderRadius: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.purple,
    marginRight: SIZES.fifteen,
  },
  headerText: {
    color: '#444',
  },
  searchBtn: {
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.fifteen,
  },
  itemContainer: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.brownGray,
    marginHorizontal: SIZES.fifteen,
    marginVertical: SIZES.fifteen,
    paddingBottom: SIZES.fifteen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderWidth: 2,
    height: SIZES.fifty * 0.8,
    width: SIZES.fifty * 0.8,
    borderRadius: SIZES.fifty,
    borderColor: COLORS.brownGray,
  },
  alphaContainer: {},
});
