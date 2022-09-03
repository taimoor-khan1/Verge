import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SIZES, COLORS, IMAGES, width} from './../../constants';
import {MyTouchableOpacity} from '../../components';
import Row from '../../components/Row';

export const SectionList = () => {
  const [listData, setListData] = useState(
    Array(5)
      .fill('')
      .map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(5)
            .fill('')
            .map((_, j) => ({
              key: `${i}.${j}`,
              text: `item #${j}`,
            })),
        ],
      })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const [section] = rowKey.split('.');
    const newData = [...listData];
    const prevIndex = listData[section].data.findIndex(
      item => item.key === rowKey,
    );
    newData[section].data.splice(prevIndex, 1);
    setListData(newData);
    ToastAndroid.show('Removed', 850);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = data => (
    <TouchableHighlight
      onPress={() => {}}
      style={styles.rowFront}
      activeOpacity={0.85}
      underlayColor={COLORS.purple}>
      <View>
        <Row style={{alignItems: 'center'}}>
          <Image
            source={IMAGES.profileImage}
            style={{
              width: SIZES.twenty * 3,
              marginHorizontal: SIZES.ten,
              height: SIZES.twenty * 3,
            }}
            resizeMode="contain"
          />
          <Text style={{color: COLORS.white}}>
            Notification {data.item.text}{' '}
          </Text>
        </Row>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <MyTouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </MyTouchableOpacity>
    </View>
  );

  const renderSectionHeader = ({section}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.fifteen,
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.ten,
      }}>
      <Text style={{color: COLORS.textColor, marginTop: SIZES.ten}}>
        May 26, 2020
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stopLeftSwipe={true}
        useSectionList
        sections={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        renderSectionHeader={renderSectionHeader}
        rightOpenValue={-width * 0.215}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.fifteen,
  },
  backTextWhite: {
    color: COLORS.white,
  },
  rowFront: {
    // alignItems: "center",
    backgroundColor: COLORS.darkPurple,
    borderRadius: SIZES.ten,
    marginTop: 10,
    justifyContent: 'center',
    height: SIZES.twenty * 4,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flex: 1,
    borderRadius: SIZES.ten,

    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',

    top: 4,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.ten,
    justifyContent: 'center',
    right: 75,
    // marginTop: 10,
  },
  backRightBtnRight: {
    backgroundColor: `${COLORS.red}80`,
    // marginTop: 10,
    borderRadius: SIZES.ten,
    right: 0,
  },
});
