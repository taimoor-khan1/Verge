import React from "react";
import { View, Text, ImageBackground, Image, FlatList } from "react-native";
import { CustomHeader, MyTouchableOpacity } from "../../components";
import {
  STYLES,
  IMAGES,
  COLORS,
  FONTS,
  SIZES,
  SCREENS,
  height,
} from "../../constants";
import styles from "./style";

export default function Moods(props) {
  const { navigation } = props;

  return (
    <View style={[STYLES.container, { paddingTop: height * 0.07 }]}>
      <CustomHeader title="Moods" />

      <View style={{ flex: 1, alignSelf: "center" }}>
        <FlatList
          numColumns={2}
          data={moods}
          renderItem={({ item, index }) => {
            return (
              <MyTouchableOpacity
                onPress={() =>
                  navigation.navigate(SCREENS.Playlist, {
                    moodType: item.title,
                  })
                }
              >
                <ImageBackground
                  resizeMode="contain"
                  source={IMAGES.bgMusicShape}
                  imageStyle={{ tintColor: COLORS.lightPurple }}
                  style={styles.cardContainer}
                >
                  <Image
                    source={{
                      uri:
                        "https://i.pinimg.com/originals/0a/f8/be/0af8bea8f50b962f3d9cdfe406cb3677.jpg",
                    }}
                    style={[STYLES.shadow, styles.imgStyle]}
                  />

                  <Text style={[FONTS.mediumFont16, styles.textStyle]}>
                    {item.title}
                  </Text>
                </ImageBackground>
              </MyTouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    </View>
  );
}

const moods = [
  { title: "Chill", image: IMAGES.brandLogo },
  { title: "Happy", image: IMAGES.brandLogo1 },
  { title: "Sad", image: IMAGES.brandLogo2 },
  { title: "Cheer Full", image: IMAGES.brandLogo3 },
  { title: "Romantic", image: IMAGES.brandLogo4 },
  { title: "Gloomy", image: IMAGES.brandLogo5 },
  //   {title: '7',  image: IMAGES.brandLogo},
];
