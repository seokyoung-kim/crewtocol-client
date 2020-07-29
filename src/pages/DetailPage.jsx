import React from 'react';
import styled from 'styled-components';
import DetailPostContainer from '../containers/detailPost/DetailPostContainer';
import Header from '../components/common/Header';

const Wrapper = styled.div``;

const DetailPage = () => {
  return (
    <Wrapper>
      <Header />
      <DetailPostContainer />
    </Wrapper>
  );
};

export default DetailPage;
