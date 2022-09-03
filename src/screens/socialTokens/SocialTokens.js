import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import {CustomHeader, Row, SearchBar} from '../../components';
import styles from './style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Felicia Day',
    price: '0.238',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Arvius',
    price: '0.548',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'The Created Economy',
    price: '11.792',
  },
];

export default function SocialTokens(props) {
  const {navigation} = props;
  const [searchText, setSearchText] = useState('');
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const searchBarAnim = useRef(new Animated.Value(-55)).current;

  useEffect(() => {
    if (toggleSearchBar) {
      Animated.timing(searchBarAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(searchBarAnim, {
        toValue: -63,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [toggleSearchBar]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(SCREENS.SingleSocialToken, {item});
      }}>
      <Row style={[{alignItems: 'center'}, styles.item]}>
        <Image source={IMAGES.profileImage} style={styles.imageStyle} />

        <View style={styles.item}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
            {item.title}
          </Text>
          <Text
            style={[
              FONTS.mediumFont10,
              {color: COLORS.textGrey, marginTop: SIZES.five},
            ]}>
            Price: ${item.price}
          </Text>
        </View>
      </Row>
    </TouchableOpacity>
  );

  return (
    <View style={[STYLES.container, {paddingVertical: height * 0.07}]}>
      <View style={styles.header}>
        <CustomHeader
          hasBackArrow
          showSearchIcon
          title="Social Tokens"
          onSearchPress={() => setToggleSearchBar(!toggleSearchBar)}
        />
      </View>

      <Animated.View
        style={[
          {marginTop: SIZES.ten, transform: [{translateY: searchBarAnim}]},
        ]}>
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onSearchPress={() => {}}
        />
      </Animated.View>

      <Animated.FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScrollBeginDrag={() => setToggleSearchBar(false)}
        style={{transform: [{translateY: searchBarAnim}]}}
        contentContainerStyle={{paddingVertical: SIZES.fifteen}}
      />
    </View>
  );
}
