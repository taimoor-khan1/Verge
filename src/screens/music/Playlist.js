import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import {
  STYLES,
  FONTS,
  COLORS,
  SIZES,
  IMAGES,
  height,
} from "../../constants/theme";
import {
  CustomHeader,
  Icon,
  IconType,
  MyTouchableOpacity,
} from "../../components";

export default function Playlist(props) {
  const { route } = props;
  const { moodType } = route?.params;
  const [playlistData, setPlaylistData] = useState(songsList);

  const onLikeHandler = (itemIndex) => {
    const temp = [...playlistData];
    temp[itemIndex].liked = !temp[itemIndex].liked;
    setPlaylistData(temp);
  };

  const PlayListComp = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            resizeMode="cover"
            source={{ uri: item.image }}
            style={styles.imgStyle}
          />

          <MyTouchableOpacity style={styles.contentView}>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont14, { color: COLORS.white }]}
            >
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont10, { color: COLORS.textGrey }]}
            >
              {item.title}
            </Text>
          </MyTouchableOpacity>

          <MyTouchableOpacity onPress={() => onLikeHandler(index)}>
            <Image
              resizeMode="contain"
              style={styles.iconStyle}
              source={item.liked ? IMAGES.filledHeart : IMAGES.favouriteIcon}
            />
          </MyTouchableOpacity>

          {/* <MyTouchableOpacity>
            <Icon
              name="more-horizontal"
              type={IconType.Feather}
              color={COLORS.white}
              size={SIZES.twenty * 1.5}
            />
          </MyTouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <View style={[STYLES.container, { paddingTop: height * 0.07 }]}>
      <CustomHeader
        hasBackArrow
        title="Playlist"
        subTitle={moodType}
        showShuffleBtn
      />

      <View style={{ height: SIZES.fifteen }} />

      <FlatList
        data={playlistData}
        renderItem={PlayListComp}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListStyle}
      />
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
    flexDirection: "row",
    alignItems: "center",
  },
  contentView: {
    flex: 1,
    marginHorizontal: SIZES.fifteen,
  },
  imgStyle: {
    height: SIZES.twentyFive * 2.2,
    width: SIZES.twentyFive * 2.2,
    borderRadius: SIZES.twentyFive * 2.2,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    height: SIZES.twenty * 1.3,
    width: SIZES.twenty * 1.3,
    marginRight: SIZES.five,
  },
  flatListStyle: {
    flexGrow: 1,
    paddingTop: SIZES.twenty,
    paddingHorizontal: SIZES.fifteen,
    paddingBottom: SIZES.fifty,
  },
});

const songsList = [
  {
    liked: true,
    name: "Something About Us",
    title: "Daft Puck",
    image:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg",
  },
  {
    liked: false,
    name: "Something About Us",
    title: "Daft Puck",
    image:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg",
  },
  {
    liked: false,
    name: "Something About Us",
    title: "Daft Puck",
    image:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg",
  },
  {
    liked: false,
    name: "Something About Us",
    title: "Daft Puck",
    image:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg",
  },
];
