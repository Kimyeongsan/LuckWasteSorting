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

// Camera 검색 화면
// Tensorflow Lite 적용 예정
const CameraScreen = () => {

  return (
    <Container>
      <Title>Camera Screen</Title>
    </Container>
  );

}

export default CameraScreen;