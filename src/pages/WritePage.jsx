import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import WriteFormContainer from '../containers/writeForm/WriteFormContainer';

const Wrapper = styled.div``;

const WritePage = () => (
  <Wrapper>
    <Header />
    <WriteFormContainer />
  </Wrapper>
);

export default WritePage;
