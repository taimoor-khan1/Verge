import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {COLORS, FONTS, SIZES, STYLES} from '../../constants';
import {useKeyboard} from '../../hooks/useKeyboard';
import {
  CommonButton,
  CustomHeader,
  Icon,
  IconType,
  MusicComp,
  MyTouchableOpacity,
  SearchBar,
} from '../../components';

const tagList = [
  {title: 'music'},
  {title: 'sing'},
  {title: 'relax'},
  {title: 'pop'},
];

export default function UploadMusic(props) {
  const {navigation} = props;
  const {keyboardShown} = useKeyboard();
  const [description, setDescription] = useState('');
  const [searchText, setSearchText] = useState('');
  const [tags, setTags] = useState(tagList);

  const onRemoveTag = index => {
    const temp = [...tags];
    temp.splice(index, 1);
    setTags(temp);
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />

      <ScrollView contentContainerStyle={styles.mainView}>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Say something you want to say.."
          placeholderTextColor={COLORS.white}
          style={styles.textInputStyle}
        />

        <MusicComp
          title="Upload your music"
          style={{marginTop: SIZES.fifty * 0.8}}
        />

        <Text
          style={[
            FONTS.boldFont20,
            {color: COLORS.white, marginVertical: SIZES.twentyFive * 1.5},
          ]}>
          Add a tag
        </Text>

        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Add tags to get more people browse"
          style={{marginHorizontal: 0}}
        />

        <View style={styles.tagsContainer}>
          {tags.map((item, index) => (
            <View key={index} style={styles.tagStyle}>
              <Text style={[FONTS.mediumFont12, {color: COLORS.textGrey}]}>
                {item.title}
              </Text>
              <MyTouchableOpacity onPress={() => onRemoveTag(index)}>
                <Icon
                  name="cross"
                  type={IconType.Entypo}
                  size={SIZES.twenty}
                  color={`${COLORS.white}90`}
                  style={{marginLeft: SIZES.ten, marginRight: -SIZES.five}}
                />
              </MyTouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {!keyboardShown && (
        <CommonButton
          title="Publish"
          btnStyle={styles.btnStyle}
          onPress={() => navigation.goBack()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    padding: SIZES.fifteen,
    marginTop: SIZES.fifteen,
  },
  textInputStyle: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  tagsContainer: {
    marginTop: SIZES.fifty * 0.6,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: SIZES.twenty,
    marginBottom: SIZES.twenty,
    borderRadius: SIZES.ten,
    paddingVertical: SIZES.ten * 1.2,
    paddingHorizontal: SIZES.fifteen,
    backgroundColor: COLORS.background,
  },
  btnStyle: {
    margin: SIZES.fifteen,
    marginBottom: SIZES.twentyFive,
  },
});
