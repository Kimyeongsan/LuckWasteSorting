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

// 검색이 완료 되었을 경우에 대한 화면

// 구현 사항 :
// Start Luck 버튼 제작 필요 : 클릭 시 Main화면으로 전환

const SearchComplete = () => {

  return (
    <Container>
      <Title>SearchComplete Screen</Title>
    </Container>
  );

}

export default SearchComplete;