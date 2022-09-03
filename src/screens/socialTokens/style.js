import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default StyleSheet.create({
  header: {
    zIndex: 10,
    height: 60,
    position: 'relative',
    borderBottomWidth: 0,
    backgroundColor: COLORS.primary,
    borderBottomColor: COLORS.primary,
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
  item: {
    paddingHorizontal: SIZES.fifteen,
    marginVertical: SIZES.ten,
  },
  imageStyle: {
    borderWidth: 2,
    height: SIZES.fifty * 0.8,
    width: SIZES.fifty * 0.8,
    borderRadius: SIZES.fifty,
    borderColor: COLORS.brownGray,
  },
});
