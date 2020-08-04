import React from 'react';
import styled from 'styled-components';
import Filter from '../../components/cardList/Filter';
import CardList from '../../components/cardList/CardList';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  margin-top: 50px;
  min-height: 500px;
`;

const CardListContainer = () => {

  return (
    <Wrapper>
      <Filter />
      <CardList />
    </Wrapper>
  );
};

export default CardListContainer;
