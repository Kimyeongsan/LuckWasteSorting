import React from 'react';

import styled from 'styled-components/native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import Search_gridItem from './Search_gridItem';

const Container = styled.View`
    flex: 1;
`;

const Child = styled.View`
    height: 350px;
    width: 350px;
    justifyContent: center;
`;


const Search_item = () => {
    return (
        <Container>
            <SwiperFlatList
                autoplay
                autoplayDelay={10}
                autoplayLoop
                index={0}
                showPagination>

                {/* 반복문으로 바꿀 예정 */}
                <Child>
                    <Search_gridItem />
                </Child>

                <Child>
                    <Search_gridItem />
                </Child>
                
                <Child>
                    <Search_gridItem />
                </Child>

            </SwiperFlatList>
        </Container>
    );
}

export default Search_item;

