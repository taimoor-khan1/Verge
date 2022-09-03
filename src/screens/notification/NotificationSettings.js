import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Switch} from 'react-native';
import {STYLES, SIZES, FONTS, COLORS, width} from './../../constants';
import {CustomHeader, Icon, IconType} from '../../components';

const data = [
  {
    id: '1',
    name: 'Lorem Ipsum',
    icon: 'mail',
    type: IconType.Feather,
    status: false,
  },
  {
    id: '2',
    name: 'Adipsicing Eluit Sed',
    icon: 'phone-call',
    type: IconType.Feather,
    status: false,
  },
  {
    id: '3',
    name: 'Consectatur Gem',
    icon: 'users',
    type: IconType.Feather,
    status: false,
  },
  {
    id: '4',
    name: 'Dicolora amit ',
    icon: 'history',
    type: IconType.MaterialCommunityIcons,
    status: false,
  },
];

export default function NotificationSettings(props) {
  const [select, setSelect] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [DATA, setDATA] = useState([...data]);

  const toggleSwitch = index => {
    const temp = [...DATA];
    temp[index].status = !temp[index].status;
    setDATA(temp);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={item.status ? styles.select : styles.unSelect}>
          <Icon
            name={item.icon}
            type={item.type}
            color={COLORS.gray}
            size={SIZES.twenty}
          />
        </View>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              flex: 1,
              alignSelf: 'center',
              color: COLORS.white,
              paddingHorizontal: SIZES.twenty,
            },
          ]}>
          {item.name}
        </Text>

        <Switch
          trackColor={{false: COLORS.gray, true: COLORS.primary}}
          thumbColor={item.status ? COLORS.purple : COLORS.white}
          onValueChange={() => toggleSwitch(index)}
          value={item.status}
        />
      </View>
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title="Notification Settings" />
      <View style={{marginTop: SIZES.twenty}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          key={item => item}
          contentContainerStyle={{
            paddingHorizontal: SIZES.fifteen,
            paddingTop: SIZES.twentyFive,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.twenty,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.darkPurple,
    borderColor: COLORS.purple,
    borderRadius: SIZES.fifteen,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  select: {
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.ten,
    borderRadius: width * 2,
    backgroundColor: COLORS.purple,
  },
  unSelect: {
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.ten,
    borderRadius: width,
    backgroundColor: COLORS.primary,
  },

  shodow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
