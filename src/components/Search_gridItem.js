import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    margin: 5,
    height: 160, 
    width: 160
  },
  
  itemInvisible: {
    backgroundColor: 'transparent',
  },

  itemText: {
    color: '#fff',
  }
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