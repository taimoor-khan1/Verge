import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainNavigation from '../navigation/MainNavigation';
import {COLORS, height} from '../constants';

const AnimatedView = Animated.View;
const AnimatedBlurView = Animated.createAnimatedComponent(View);

const songCoverSizes = [50, Dimensions.get('window').width - 60];
const songCoverTopPositions = [
  10,
  Dimensions.get('window').width / 2 - songCoverSizes[1] / 2,
];
const songCoverLeftPositions = [
  20,
  Dimensions.get('window').width / 2 - songCoverSizes[1] / 2,
];
const snapPoints = [70, height - 70];

const song = {
  id: '0',
  name: `Ain't A Thing`,
  album: 'TIM',
  artist: 'Avicii',
  length: '3:04',
};

const songs = [...Array(40)].map((_, index) => ({
  id: `${index}`,
  name: 'Song Name',
  artist: 'Artist Name',
  cover: '#' + (((1 << 24) * Math.random()) | 0).toString(16),
}));

const MusicPlayer = () => {
  const animatedValue = new Animated.Value(500);
  let bottomSheetRef = React.createRef<BottomSheet>();
  let fall = new Animated.Value(1);
  const [isOpened, setIsOpened] = useState(false);

  const animatedSongCoverTopPosition = Animated.interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [songCoverTopPositions[0], songCoverTopPositions[1]]
      .slice()
      .reverse(),
    extrapolate: 'clamp',
  });

  const animatedSongCoverSize = Animated.interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [songCoverSizes[0], songCoverSizes[1]].slice().reverse(),
    extrapolate: 'clamp',
  });

  const animatedHeaderContentOpacity = Animated.interpolateNode(fall, {
    inputRange: [0.75, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const onFlatListTouchStart = () => {
    bottomSheetRef.current!.snapTo(0);
  };

  const onHeaderPress = () => {
    if (!isOpened) bottomSheetRef.current!.snapTo(1);
    else onFlatListTouchStart();
    setIsOpened(!isOpened);
  };

  const renderContent = () => {
    const animatedBackgroundOpacity = Animated.sub(
      1,
      animatedHeaderContentOpacity,
    );
    const animatedContentOpacity = Animated.interpolateNode(fall, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <AnimatedView style={[styles.contentContainer]}>
        <AnimatedView
          style={[
            styles.contentBackground,
            {opacity: animatedBackgroundOpacity},
          ]}
        />

        <AnimatedView style={{opacity: animatedContentOpacity}}>
          <AnimatedView
            style={{
              height: Animated.add(
                Animated.sub(animatedSongCoverSize, snapPoints[0]),
                animatedSongCoverTopPosition,
              ),
            }}
          />

          <View style={styles.seekBarContainer}>
            <View style={styles.seekBarTrack} />
            <View style={styles.seekBarThumb} />
            <View style={styles.seekBarTimingContainer}>
              <Text style={styles.seekBarTimingText}>0:00</Text>
              <Text style={styles.seekBarTimingText}>{`-${song.length}`}</Text>
            </View>
          </View>

          <Text style={styles.songTitleLarge}>{song.name}</Text>
          <Text
            style={
              styles.songInfoText
            }>{`${song.artist} ⏤ ${song.album}`}</Text>
        </AnimatedView>
      </AnimatedView>
    );
  };

  const renderSongCover = () => {
    const animatedSongCoverLeftPosition = Animated.interpolateNode(fall, {
      inputRange: [0, 1],
      outputRange: songCoverLeftPositions.slice().reverse(),
      extrapolate: 'clamp',
    });

    return (
      <AnimatedView
        key={'song-cover-container'}
        style={[
          styles.songCoverContainer,
          {
            height: animatedSongCoverSize,
            width: animatedSongCoverSize,
            left: animatedSongCoverLeftPosition,
            top: animatedSongCoverTopPosition,
          },
        ]}>
        <Image
          key={'song-cover'}
          style={styles.songCoverImage}
          source={{
            uri: 'https://i.pinimg.com/originals/5c/3f/d9/5c3fd9952bbd0235c4911da8d9fdac5e.webp',
          }}
        />
      </AnimatedView>
    );
  };

  const renderHeader = () => {
    const animatedBackgroundOpacity = Animated.sub(
      1,
      animatedHeaderContentOpacity,
    );
    return [
      <TouchableOpacity
        key={'header-container'}
        activeOpacity={0.85}
        onPress={onHeaderPress}
        style={{backgroundColor: COLORS.background}}>
        <AnimatedView style={styles.headerContainer}>
          <AnimatedView
            style={[
              styles.headerBackground,
              {
                opacity: animatedBackgroundOpacity,
              },
            ]}>
            {renderHandler()}
          </AnimatedView>
          <AnimatedBlurView
            intensity={100}
            tint={'default'}
            style={[
              styles.headerContentContainer,
              {
                opacity: animatedHeaderContentOpacity,
              },
            ]}>
            <View style={styles.headerTopBorder} />
            <Text style={styles.songTitleSmall}>{song.name}</Text>
            <TouchableOpacity style={styles.headerActionButton}>
              <Ionicons name="ios-play" size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerActionButton}>
              <Ionicons name="ios-fastforward" size={32} />
            </TouchableOpacity>
          </AnimatedBlurView>
        </AnimatedView>
      </TouchableOpacity>,
      renderSongCover(),
    ];
  };

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolateNode(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });

    return (
      <AnimatedView
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    );
  };

  const renderHandler = () => {
    const animatedBar1Rotation = (outputRange: number[]) =>
      Animated.interpolateNode(fall, {
        inputRange: [0, 1],
        outputRange: outputRange,
        extrapolate: 'clamp',
      });

    return (
      <TouchableOpacity
        onPress={onFlatListTouchStart}
        style={styles.handlerContainer}>
        <AnimatedView
          style={[
            styles.handlerBar,
            {
              left: -7.5,
              transform: [
                {
                  rotate: Animated.concat(
                    // @ts-ignore
                    animatedBar1Rotation([0.3, 0]),
                    'rad',
                  ),
                },
              ],
            },
          ]}
        />
        <AnimatedView
          style={[
            styles.handlerBar,
            {
              right: -7.5,
              transform: [
                {
                  rotate: Animated.concat(
                    // @ts-ignore
                    animatedBar1Rotation([-0.3, 0]),
                    'rad',
                  ),
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

  const renderSongItem = ({item}: {item: any}) => {
    return (
      <View style={styles.songListItemContainer}>
        <View
          style={[
            {
              backgroundColor: `${item.cover}`,
            },
            styles.songListItemCover,
          ]}
        />
        <View style={styles.songListItemInfoContainer}>
          <Text>{item.name}</Text>
          <Text style={styles.songListItemSecondaryText}>{item.artist}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={() => {
          onFlatListTouchStart();
          setIsOpened(false);
        }}
        style={{flex: 1}}>
        <MainNavigation />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        initialSnap={0}
        callbackNode={fall}
        snapPoints={snapPoints}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  // Screen
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Shadow
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },

  // Content
  contentContainer: {
    alignItems: 'center',
    height: snapPoints[1] - snapPoints[0],
    overflow: 'visible',
  },

  contentBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
  },

  // Header
  headerContainer: {
    height: snapPoints[0],
  },

  headerBackground: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  headerContentContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 20 + songCoverSizes[0] + 20,
  },

  headerTopBorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    opacity: 0.5,
    height: 0.25,
    backgroundColor: '#9B9B9B',
  },

  headerActionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
    minWidth: 50,
  },

  // Handler
  handlerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    height: 20,
    width: 20,
  },

  handlerBar: {
    position: 'absolute',
    backgroundColor: '#D1D1D6',
    top: 5,
    borderRadius: 3,
    height: 5,
    width: 20,
  },

  // Song
  songCoverContainer: {
    position: 'absolute',
    top: 10,
    left: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15.0,
  },

  songTitleLarge: {
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
  },

  songTitleSmall: {
    flexGrow: 1,
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
  },

  songInfoText: {
    textAlign: 'center',
    color: '#FE2D55',
    fontSize: 24,
    lineHeight: 28,
  },

  songCoverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#333',
  },

  // Seek Bar
  seekBarContainer: {
    height: 24,
    marginTop: 15,
    width: songCoverSizes[1],
  },

  seekBarThumb: {
    position: 'absolute',
    backgroundColor: '#8E8E93',
    top: -2,
    borderRadius: 6,
    width: 6,
    height: 6,
  },

  seekBarTrack: {
    backgroundColor: '#DDDEDD',
    height: 2,
    borderRadius: 4,
  },

  seekBarTimingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  seekBarTimingText: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '500',
    color: '#8E8E93',
  },

  // Song List Item
  songListItemContainer: {
    flexDirection: 'row',
  },

  songListItemCover: {
    marginLeft: 20,
    marginRight: 15,
    marginVertical: 5,
    width: songCoverSizes[0],
    height: songCoverSizes[0],
    borderRadius: 4,
  },

  songListItemInfoContainer: {
    flexGrow: 1,
    borderBottomColor: '#CAC9CE',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },

  songListItemSecondaryText: {
    fontSize: 12,
    color: '#8E8D92',
  },
});

export default MusicPlayer;
