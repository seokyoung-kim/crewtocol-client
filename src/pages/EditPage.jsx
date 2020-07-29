import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import EditFormContainer from '../containers/editForm/EditFormContainer';

const Wrapper = styled.div``;

const EditPage = () => (
  <Wrapper>
    <Header />
    <EditFormContainer />
  </Wrapper>
);

export default EditPage;
