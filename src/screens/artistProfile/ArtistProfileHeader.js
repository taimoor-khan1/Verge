import React, {useState} from 'react';
import {View, Text, ImageBackground, Modal, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS, CONSTANTS, FONTS, SCREENS, SIZES} from '../../constants';
import styles from './style';
import {
  CustomHeader,
  CommonButton,
  MyTouchableOpacity,
  Icon,
  IconType,
  MusicComp,
} from '../../components';

export default function ArtistProfileHeader(props) {
  const navigation = useNavigation();
  const userType = useSelector(state => state.UserType.value);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        borderBottomLeftRadius={SIZES.fifteen}
        borderBottomRightRadius={SIZES.fifteen}
        source={{
          uri: 'https://c.ndtvimg.com/2022-02/50auerv8_renault-concept-car_120x90_22_February_22.png',
        }}>
        <View style={styles.backArrowStyle}>
          <CustomHeader
            hasBackArrow
            title={userType === CONSTANTS.USER_TYPE.ARTIST ? 'Profile' : null}
            showEditIcon={userType === CONSTANTS.USER_TYPE.ARTIST}
          />
        </View>

        <View style={styles.artistTitleView}>
          <Text style={[FONTS.boldFont24, styles.artistTitle]}>
            Tame Impala
          </Text>
          <Text style={[FONTS.mediumFont12, styles.listenersText]}>
            20,420 monthly listeners
          </Text>
        </View>

        <View style={styles.followersView}>
          <View>
            <Text style={[FONTS.mediumFont10, {color: COLORS.textGrey}]}>
              Followers
            </Text>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont18, {color: COLORS.white}]}>
              140.8k
            </Text>
          </View>

          <View>
            <Text style={[FONTS.mediumFont10, {color: COLORS.textGrey}]}>
              Following
            </Text>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont18, {color: COLORS.white}]}>
              120
            </Text>
          </View>

          <View>
            <Text style={[FONTS.mediumFont10, {color: COLORS.textGrey}]}>
              Tracks
            </Text>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont18, {color: COLORS.white}]}>
              48
            </Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          {userType === CONSTANTS.USER_TYPE.ARTIST ? (
            <MusicComp
              title="Upload your music"
              style={{width: '90%'}}
              onPress={() => navigation.navigate(SCREENS.UploadMusic)}
            />
          ) : (
            <>
              <CommonButton
                title="Follow"
                onPress={() => {}}
                btnStyle={styles.btnStyle}
              />
              <CommonButton
                title="Donate"
                onPress={() => setVisible(true)}
                btnStyle={[
                  styles.btnStyle,
                  {backgroundColor: COLORS.background},
                ]}
              />
            </>
          )}
        </View>
      </ImageBackground>

      <Modal
        visible={visible}
        transparent={true}
        statusBarTranslucent
        animationType="slide">
        <MyTouchableOpacity
          style={styles.modalContainer}
          onPress={() => setVisible(false)}>
          <View style={styles.modalView}>
            <Text
              style={[
                FONTS.boldFont20,
                {color: COLORS.white, textAlign: 'center'},
              ]}>
              Connect Your Wallet
            </Text>

            <Text
              style={[
                FONTS.mediumFont14,
                {
                  color: COLORS.textGrey,
                  textAlign: 'center',
                  marginTop: SIZES.ten,
                },
              ]}>
              Duis aute irure dolor in in voluptate
            </Text>

            <MyTouchableOpacity
              style={styles.modalListView}
              onPress={() => {
                setVisible(false);
                navigation.navigate(SCREENS.SocialTokens);
              }}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/5c/3f/d9/5c3fd9952bbd0235c4911da8d9fdac5e.webp',
                }}
                style={styles.modalImgStyle}
              />

              <View style={{flex: 1, marginHorizontal: SIZES.twenty}}>
                <Text style={[FONTS.semiBoldFont18, {color: COLORS.purple}]}>
                  Rally
                </Text>
              </View>

              <Icon
                name="chevron-forward"
                type={IconType.Ionicons}
                size={SIZES.twentyFive}
                color={COLORS.purple}
              />
            </MyTouchableOpacity>
          </View>
        </MyTouchableOpacity>
      </Modal>
    </>
  );
}
