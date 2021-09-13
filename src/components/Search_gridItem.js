import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    height: 150, // approximate a square
    width: 150
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

const data = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
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