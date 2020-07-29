import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Banner from '../components/common/Banner';
import CardListContainer from '../containers/cardList/CardListContainer';

const Wrapper = styled.div``;

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <CardListContainer />
    </Wrapper>
  );
};

export default MainPage;
