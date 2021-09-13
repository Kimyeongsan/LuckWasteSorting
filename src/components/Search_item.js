import React from 'react';
import { Dimensions,  StyleSheet, View } from 'react-native';

import Search_gridItem from './Search_gridItem';
import SwiperFlatList from 'react-native-swiper-flatlist';

const Search_item = () => {
    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay
                autoplayDelay={4}
                autoplayLoop
                index={0}
                showPagination>

                <View style={[styles.child]}>
                    <Search_gridItem />
                </View>
                <View style={[styles.child]}>
                    <Search_gridItem />
                </View>
                <View style={[styles.child]}>
                    <Search_gridItem />
                </View>
                <View style={[styles.child]}>
                    <Search_gridItem/>                
                </View>

            </SwiperFlatList>
        </View>
    );
}

export default Search_item;

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    child: {
        height: 300,
        width,
        justifyContent: 'center',
    }
});