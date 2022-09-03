import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Row from "../../components/Row";
import { COLORS, FONTS, SIZES, width, IMAGES, STYLES } from "../../constants";
import { IconType, Icon, CustomHeader } from "../../components";
import moment from "moment";

export default function Chat({ route, navigation }) {
  const renderMessages = ({ item }) => {
    return (
      <View style={{ alignSelf: item.sender ? "flex-end" : "flex-start" }}>
        <Row
          style={[
            styles.card,
            {
              backgroundColor: item.sender
                ? COLORS.darkPurple
                : COLORS.textColor,

              borderBottomLeftRadius: item.sender ? SIZES.ten : 0,
              borderBottomRightRadius: item.sender ? 0 : SIZES.ten,
            },
          ]}
        >
          <View
            style={{
              width: width * 0.75,
            }}
          >
            <Text
              style={[
                FONTS.boldFont16,
                {
                  color: COLORS.white,
                  textDecorationLine: "underline",
                },
              ]}
            >
              john
            </Text>
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  FONTS.mediumFont12,
                  {
                    marginVertical: SIZES.five,
                    width: width * 0.6,
                    color: COLORS.white,
                  },
                ]}
              >
                {item.msg}
              </Text>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {
                    color: COLORS.halfWhite,
                  },
                ]}
              >
                02:00 pm
              </Text>
            </Row>
          </View>
        </Row>
      </View>
    );
  };

  return (
    <View style={STYLES.container}>
      {/* <StackHeader isDark={type} title={title} /> */}
      <CustomHeader hasBackArrow title="Mr john" />
      <Text
        style={[
          FONTS.boldFont20,
          {
            color: COLORS.halfWhite,
            textAlign: "center",
            marginTop: SIZES.ten,
          },
        ]}
      >
        {moment().format("DD-MM-YYYY")}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mesages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderMessages}
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty * 0.3,
          paddingBottom: 150,
        }}
      />

      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.primary,
          borderColor: COLORS.textColor,
          borderTopWidth: 1,
          position: "absolute",
          bottom: 0,

          width: width,
          shadowColor: `${COLORS.grey}25`,
          paddingHorizontal: SIZES.ten,
          shadowOffset: {
            width: 0,
            height: 3.5,
          },
          shadowOpacity: 0.15,
          shadowRadius: 4.3,
          elevation: 100,
          maxHeight: 100,
        }}
      >
        <TextInput
          multiline={true}
          placeholder={"Type Your Message..."}
          style={[
            FONTS.mediumFont14,
            {
              height: 60,
              flex: 1,
              paddingHorizontal: SIZES.ten,
              color: COLORS.white,
              maxHeight: 100,
            },
          ]}
          selectionColor={COLORS.primary}
          placeholderTextColor={COLORS.brownGray}
        />

        <Icon name={"send"} type={IconType.Feather} color={COLORS.textColor} />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: width * 0.13,
    width: width * 0.13,
    borderRadius: width,
  },

  card: {
    marginTop: SIZES.fifteen,
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.ten,
    borderColor: COLORS.darkBackground,
    alignItems: "center",
    width: width * 0.8,
    borderWidth: 1,
    borderTopLeftRadius: SIZES.ten,
    borderTopRightRadius: SIZES.ten,
    elevation: 40,
  },
});

const mesages = [
  {
    id: 1,
    msg: "Hello dear",
    sender: false,
  },
  {
    id: 2,
    msg: "Hi deer, How are you ?",
    sender: true,
  },
  {
    id: 3,
    msg: "I am good wbu?",
    sender: false,
  },
  {
    id: 4,
    msg: `i'am not talking to you! okay? ,i'am not talking to you! okay?i'am not talking to you! okay? `,
    sender: true,
  },
  {
    id: 5,
    msg: "why?",
    sender: false,
  },

  {
    id: 7,
    msg: "why are you running???",
    sender: false,
  },
  {
    id: 8,
    msg: "I am not running",
    sender: true,
  },
  {
    id: 9,
    msg: `anyhow, what's your name ?`,
    sender: false,
  },
  {
    id: 10,
    msg: `I am Justin`,
    sender: true,
  },
  //   {
  //     id: 11,
  //     msg: `F**k you Justin`,
  //     sender: false,
  //   },
  //   {
  //     id: 10,
  //     msg: `F**k you`,
  //     sender: true,
  //   },
  //   {
  //     id: 10,
  //     msg: `you know what i did last night ?`,
  //     sender: false,
  //   },
  //   {
  //     id: 10,
  //     msg: `you better not bring my mother into this.`,
  //     sender: true,
  //   },
  //   {
  //     id: 10,
  //     msg: `I made a fire over there...`,
  //     sender: false,
  //   },
  //   {
  //     id: 10,
  //     msg: `ohh great.`,
  //     sender: true,
  //   },
  //   {
  //     id: 10,
  //     msg: `then i f**ked your mother next to it..`,
  //     sender: false,
  //   },
];
