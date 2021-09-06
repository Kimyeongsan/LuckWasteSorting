import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #CFDEF3;
`;

const Title = styled.Text`
  flex: 1;
	align-self: center;
  marginTop: 50px;
	fontSize: 20px;
  font-weight: bold;
`;

// 검색 상세 화면 : 검색 화면을 통해 검색된 Item에 대한 세부 내역 출력

// 구현사항 :
// Grid item 출력 View Pager 구축 예정

const SearchDetail = () => {

  return (
    <Container>
      <Title>SearchDetail Screen</Title>
    </Container>
  );

}

export default SearchDetail;