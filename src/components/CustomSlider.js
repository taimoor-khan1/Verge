import React from 'react';
import {StyleSheet, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {COLORS, SIZES, IMAGES} from '../constants';

export default function CustomSlider(props) {
  const {sliderLength} = props;
  const [sliderOneValue, setSliderOneValue] = React.useState([0]);

  const CustomMarker = () => {
    return (
      <Image
        resizeMode="contain"
        source={IMAGES.sliderThumbIcon}
        style={styles.markerStyle}
      />
    );
  };

  return (
    <MultiSlider
      values={sliderOneValue}
      sliderLength={sliderLength}
      markerOffsetY={3}
      trackStyle={styles.trackStyle}
      selectedStyle={styles.selectedStyle}
      containerStyle={styles.sliderContainer}
      customMarker={CustomMarker}
    />
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    paddingHorizontal: SIZES.fifteen,
    alignItems: 'center',
  },
  trackStyle: {
    borderRadius: 6,
    height: SIZES.five * 1.2,
    backgroundColor: COLORS.brownGray,
  },
  selectedStyle: {
    backgroundColor: COLORS.lightPurple,
  },
  markerStyle: {
    height: SIZES.fifty,
    width: SIZES.fifty,
  },
});
