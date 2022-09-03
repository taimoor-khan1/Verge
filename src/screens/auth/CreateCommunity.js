import { StyleSheet, Text, View, Image, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../constants";
import {
  CustomButton,
  EditText,
  Icon,
  IconType,
  MyTouchableOpacity,
} from "../../components";
import CircleImage from "../../components/CircleImage";
import ImagePicker from "react-native-image-crop-picker";

export default function CreateCommunity(props) {
  const { navigation } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(false);

  //   =============image select========
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 800,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image);
    });
  };

  const ProfileComplete = () => {
    return (
      <Modal
        animationType="fade"
        statusBarTranslucent
        transparent
        visible={visible}
      >
        <MyTouchableOpacity
          onPress={() => {
            setVisible(false);
          }}
          activeOpacity={0.85}
          style={{
            flex: 1,
            backgroundColor: COLORS.blackWithOpacity,
            justifyContent: "center",
          }}
        >
          <View
            style={[
              styles.modelContainer,
              {
                //   backgroundColor: COLORS.white,
                // paddingVertical: SIZES.twentyFive * 2,
                // marginHorizontal: SIZES.ten,
                // borderRadius: SIZES.ten,
                // paddingHorizontal: SIZES.fifteen,
              },
            ]}
          >
            <Text
              style={[
                FONTS.mediumFont18,
                {
                  color: COLORS.textColor,
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginBottom: SIZES.fifteen,
                },
              ]}
            >
              Profile Created
            </Text>

            <Image
              source={IMAGES.vergeLogo}
              style={{
                height: width * 0.15,
                width: width * 0.5,
                alignSelf: "center",
              }}
              resizeMode={"contain"}
            />

            <Text
              style={[
                FONTS.mediumFont18,
                {
                  textAlign: "center",
                  color: COLORS.white,
                  alignSelf: "center",
                  marginVertical: SIZES.twentyFive,
                },
              ]}
            >
              Your Community has been created successfully!
            </Text>
            <CustomButton
              label="Continue"
              onPress={() => {
                navigation.navigate(SCREENS.App);

                setVisible(false);
              }}
            />
          </View>
        </MyTouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={STYLES.container}>
      <ScrollView contentContainerStyle={[, { flexGrow: 1 }]}>
        <Text
          style={[
            FONTS.boldFont24,
            {
              color: COLORS.white,
              marginBottom: SIZES.fifteen,
              alignSelf: "center",
            },
          ]}
        >
          Create Community
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: SIZES.twentyFive,
          }}
        >
          <View>
            {image !== null && (
              <Image
                source={{ uri: image?.path }}
                resizeMode={"contain"}
                style={{
                  height: SIZES.fifty * 3,
                  width: SIZES.fifty * 5,
                }}
              />
            )}

            <MyTouchableOpacity onPress={() => selectImage()}>
              <Text style={[FONTS.mediumFont14, styles.addImage]}>
                Add Image
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
        {/* =====================input field============== */}
        <View
          style={{
            paddingHorizontal: SIZES.fifteen,
          }}
        >
          <EditText
            label="Enter title"
            value={title}
            autoCapitalize
            onChangeText={(text) => {
              setTitle(text);
            }}
          />
          <EditText
            label="Write some description"
            value={description}
            onChangeText={(text) => {
              setDescription(text);
            }}
          />

          {/* ==================button======== */}
          <CustomButton
            label={"Create"}
            style={{
              marginVertical:
                Platform.OS === "android"
                  ? SIZES.twentyFive * 1.2
                  : SIZES.twenty,
            }}
            onPress={() => setVisible(true)}
          />
        </View>
        {/* ====================Modal================= */}
        {ProfileComplete()}
        {/* <Modal visible={visible} transparent={true} animationType={"fade"}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: SIZES.twentyFive,
              backgroundColor: `${COLORS.black}90`,
            }}
          >
            <View style={[styles.modelContainer]}>
              <Text
                style={[
                  FONTS.mediumFont18,
                  {
                    color: COLORS.textColor,
                    marginVertical: SIZES.fifteen,
                  },
                ]}
              >
                Community create successfully
              </Text>

              <CustomButton
                label={"Continue"}
                btnstyle={{
                  paddingVertical: SIZES.ten,
                }}
                style={{
                  marginVertical:
                    Platform.OS === "android" ? SIZES.twentyFive : SIZES.twenty,
                }}
                onPress={() => {
                  setVisible(false);
                  navigation.navigate(SCREENS.App);
                }}
              />
            </View>
          </View>
        </Modal> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  modelContainer: {
    backgroundColor: COLORS.darkPurple,
    paddingVertical: SIZES.twentyFive * 2,
    marginHorizontal: SIZES.ten,
    borderRadius: SIZES.ten,
    paddingHorizontal: SIZES.fifteen,
    borderRadius: SIZES.ten,
    borderWidth: 1.2,
    borderColor: COLORS.textColor,

    // backgroundColor: COLORS.darkPurple,
    // padding: SIZES.fifteen,
    // paddingHorizontal: SIZES.twenty,
    // borderRadius: SIZES.ten,
    // borderWidth: 1.2,
    // borderColor: COLORS.textColor,
    // marginHorizontal: SIZES.ten,
  },
  addImage: {
    color: COLORS.white,
    marginBottom: SIZES.fifteen,
    alignSelf: "center",
    marginVertical: SIZES.fifteen,
    borderWidth: 2,
    // backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.twentyFive,
    paddingVertical: SIZES.twenty,
    borderStyle: "dashed",
    borderColor: COLORS.gray,
    borderRadius: SIZES.fifteen,
  },
});
