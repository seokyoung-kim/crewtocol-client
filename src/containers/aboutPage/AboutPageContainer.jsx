import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Filter from '../../components/cardList/Filter';
import CardList from '../../components/cardList/CardList';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  margin-top: 50px;
  min-height: 500px;
`;

const AboutPageContainer = () => {

  return (
    <Wrapper>
        <img src={require('../../assets/about.png')} alt="" />
    </Wrapper>
  );
};

export default AboutPageContainer;
