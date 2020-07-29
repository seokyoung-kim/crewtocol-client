import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import { Pencil } from '../common/Icons';
import colors from '../../styles/colors';

const Wrapper = styled(Responsive)`
  border-bottom: 1px solid ${colors.gray[5]};
  padding-bottom: 16px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterContainer = styled.div``;

const WriteButtonContainer = styled.div``;

const WriteButton = styled.div`
  background-color: #5856d6;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;

const Filter = () => (
  <Wrapper>
    <FilterContainer>filter</FilterContainer>
    <WriteButtonContainer>
      <Link to="/write">
        <WriteButton>
          <Pencil size={14} />
          <span>스터디 글쓰기</span>
        </WriteButton>
      </Link>
    </WriteButtonContainer>
  </Wrapper>
);

export default Filter;
