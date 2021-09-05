import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #CFDEF3;
`;


const MainScreen = () => {

  return (
    <Container>
      <Text>Test</Text>
    </Container>
  );

}

export default MainScreen;