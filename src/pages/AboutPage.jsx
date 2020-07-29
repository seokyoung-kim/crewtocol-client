import React from 'react';
import styled from 'styled-components';
import DetailPostContainer from '../containers/detailPost/DetailPostContainer';
import Header from '../components/common/Header';
import AboutPageContainer from '../containers/aboutPage/AboutPageContainer';

const Wrapper = styled.div``;

const AboutPage = () => {
  return (
    <Wrapper>
      <Header />
      <AboutPageContainer />
    </Wrapper>
  );
};

export default AboutPage;
