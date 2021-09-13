import React from 'react';

import { StyleSheet, View, FlatList, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    margin: 5,
    height: 160,
    width: 160
  },

  itemInvisible: {
    backgroundColor: 'transparent',
  }
});

const data = [
  {
    key: 'A',
    image: require("../../assets/img/search/grid1.png"),
    mark: require("../../assets/img/search/mark/mark_pet.png")
  },
  {
    key: 'B',
    image: require("../../assets/img/search/grid2.png"),
    mark: require("../../assets/img/search/mark/mark_paper.png"),
    sub_mark: require("../../assets/img/search/mark/mark_pp.png")
  },
  {
    key: 'C',
    image: require("../../assets/img/search/grid3.png"),
    mark: require("../../assets/img/search/mark/mark_gras.png")
  },
  {
    key: 'D',
    image: require("../../assets/img/search/grid4.png"),
    mark: require("../../assets/img/search/mark/mark_pet.png")
  }
];

const numColumns = 2;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};


const renderItem = ({ item, index }) => {
  if (item.empty === true) {
    return <View style={[styles.item, styles.itemInvisible]} />;
  }
  return (
    <View
      style={styles.item}>
      <Image
        style={{ height: 100, width: 50 }}
        source={item.image}>
      </Image>

      <View style={{ flexDirection: 'column' }}>
        <Image
          style={{ height: 30, width: 30, marginLeft: 20 }}
          source={item.mark}>
        </Image>

        <Image
          style={{ height: 30, width: 30, marginLeft: 20 }}
          source={item.sub_mark}>
        </Image>
      </View>
    </View>
  );
};

const Search_gridItem = () => {
  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  );
}

export default Search_gridItem;