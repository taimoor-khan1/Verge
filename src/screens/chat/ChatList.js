import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../constants";
import Row from "../../components/Row";
import { CustomHeader, MyTouchableOpacity } from "../../components";
import moment from "moment";

export default function ChatList({ navigation }) {
  const renderItem = ({ item, index }) => {
    return (
      <MyTouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.Chat);
        }}
        style={[
          {
            // shadowColor: `${COLORS.grey}25`,
            // alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: COLORS.background,
            marginTop: SIZES.fifteen,
            elevation: 120,
            borderRadius: SIZES.ten,
            paddingHorizontal: SIZES.fifteen,
          },
        ]}
      >
        <Row style={{ alignItems: "center" }}>
          <Image
            style={styles.imageStyle}
            source={{ uri: item.image }}
            resizeMode="cover"
          />
          <View style={{ padding: SIZES.ten }}>
            <Text style={[FONTS.mediumFont14, { color: COLORS.textColor }]}>
              Jenifer Martin
            </Text>
            <Text
              numberOfLines={2}
              style={[
                FONTS.mediumFont10,
                {
                  lineHeight: SIZES.twenty,
                  color: COLORS.white,
                  maxWidth: width / 1.3,
                  marginVertical: SIZES.five,
                },
              ]}
            >
              {moment().format("DD-MM-YYYY    hh:mm a")}
            </Text>
          </View>
        </Row>
      </MyTouchableOpacity>
    );
  };

  return (
    <View style={STYLES.container}>
      {/* <StackHeader title="CHATS" /> */}
      <CustomHeader hasBackArrow title="CHATS" />

      <FlatList
        data={initess}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: width * 0.13,
    width: width * 0.13,
    borderRadius: width,
    marginHorizontal: SIZES.ten,
  },
});

const initess = [
  {
    id: 1,
    title: "Jenifer Martin",
    number: "+971-875696",
    status: "Accepted",
    image:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    title: "Jayson Mark",
    number: "+971-875696",
    status: "Accepted",
    image:
      "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    title: "Jenifer Martin",
    number: "+971-875696",
    status: "Accepted",
    image:
      "https://images.pexels.com/photos/10273454/pexels-photo-10273454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    title: "Jenifer Martin",
    number: "+971-875696",
    status: "Rejected",
    image:
      "https://images.pexels.com/photos/1435612/pexels-photo-1435612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    title: "Jenifer Martin",
    number: "+971-875696",
    status: "Rejected",
    image:
      "https://images.pexels.com/photos/10273454/pexels-photo-10273454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 6,
    title: "Jenifer Martin",
    number: "+971-875696",
    status: "Rejected",
    image:
      "https://images.pexels.com/photos/10273454/pexels-photo-10273454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 7,
    title: "Jenifer Martin",
    number: "+971-875696",
    status: "Pending",
    image:
      "https://images.pexels.com/photos/10273454/pexels-photo-10273454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
