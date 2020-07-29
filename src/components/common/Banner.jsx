import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const Wrapper = styled(Responsive)`
  max-width: ${(props) => props.theme.containerWidth};
  height: 300px;
`;

const Banner = () => (
  <Wrapper>
    <img src={require('../../assets/banner.png')} alt="" />
  </Wrapper>
);

export default Banner;
