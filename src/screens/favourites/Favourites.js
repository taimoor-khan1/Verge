import React from "react";
import { View, Text, FlatList } from "react-native";
import { COLORS, FONTS, height, SCREENS, SIZES, STYLES } from "../../constants";
import styles from "./style";
import {
  Row,
  Icon,
  IconType,
  CustomHeader,
  MyTouchableOpacity,
} from "../../components";

export default function Favourites(props) {
  const { navigation } = props;

  const renderItem = ({ item }) => (
    <Row style={styles.itemContainer}>
      <MyTouchableOpacity>
        <Text style={[FONTS.mediumFont14, { color: COLORS.white }]}>
          {item.title}
        </Text>
        <Text
          style={[
            FONTS.mediumFont10,
            { color: COLORS.textGrey, marginTop: SIZES.five },
          ]}
        >
          {item.subTitle}
        </Text>
      </MyTouchableOpacity>

      <MyTouchableOpacity>
        <Icon
          name="more-vertical"
          type={IconType.Feather}
          color={COLORS.white}
          size={SIZES.twentyFive}
        />
      </MyTouchableOpacity>
    </Row>
  );

  return (
    <View style={[STYLES.container, { paddingTop: height * 0.07 }]}>
      <View style={styles.header}>
        <CustomHeader
          showSearchIcon
          title="Favourites"
          onSearchPress={() => navigation.navigate(SCREENS.SearchScreen)}
        />
      </View>

      <View style={[styles.playBtnContainer]}>
        <MyTouchableOpacity style={styles.playBtnStyle}>
          <Icon
            name="play"
            type={IconType.FontAwesome5}
            color={COLORS.white}
            size={SIZES.twenty}
          />
        </MyTouchableOpacity>

        <Text style={[FONTS.mediumFont14, { color: COLORS.textGrey }]}>
          Play All (80)
        </Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingBottom: SIZES.fifty }}
      />

      {/* <View style={styles.alphaContainer}>
        {alpha.map((item, index) => (
          <Text key={index} style={[FONTS.mediumFont12, {color: COLORS.white}]}>
            {item}
          </Text>
        ))}
      </View> */}
    </View>
  );
}

const DATA = [
  {
    title: "Dani California",
    subTitle: "The Red Hot Chilli Peppers",
  },
  {
    title: "Easy",
    subTitle: "Son Lux",
  },
  {
    title: "Good Night, Travel Well",
    subTitle: "The Killers",
  },
  {
    title: "Helium",
    subTitle: "Sia",
  },
  {
    title: "I Loove You",
    subTitle: "Woodkid",
  },
  {
    title: "Magic",
    subTitle: "The Killers",
  },
  {
    title: "Dani California",
    subTitle: "The Red Hot Chilli Peppers",
  },
  {
    title: "Easy",
    subTitle: "Son Lux",
  },
  {
    title: "Good Night, Travel Well",
    subTitle: "The Killers",
  },
  {
    title: "Helium",
    subTitle: "Sia",
  },
  {
    title: "I Loove You",
    subTitle: "Woodkid",
  },
  {
    title: "Magic",
    subTitle: "The Killers",
  },
  {
    title: "Dani California",
    subTitle: "The Red Hot Chilli Peppers",
  },
  {
    title: "Easy",
    subTitle: "Son Lux",
  },
  {
    title: "Good Night, Travel Well",
    subTitle: "The Killers",
  },
  {
    title: "Helium",
    subTitle: "Sia",
  },
  {
    title: "I Loove You",
    subTitle: "Woodkid",
  },
  {
    title: "Magic",
    subTitle: "The Killers",
  },
  {
    title: "Dani California",
    subTitle: "The Red Hot Chilli Peppers",
  },
  {
    title: "Easy",
    subTitle: "Son Lux",
  },
  {
    title: "Good Night, Travel Well",
    subTitle: "The Killers",
  },
];

const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
