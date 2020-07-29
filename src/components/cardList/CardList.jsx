import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';
import Responsive from '../common/Responsive';
import axios from 'axios';

const ResponsiveWrapper = styled(Responsive)`
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  min-height: 100vh;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 280px);
  grid-auto-rows: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
  margin-bottom: 100px;
`;

const CardList = () => {

  const [data, setData] = useState('');

  const fetchData = useCallback(async() => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/study/list`);
    setData(data);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return(
    <ResponsiveWrapper>
      <Wrapper>
        {data && data.map(data => (
        <Card data={data}/>
        ))}
      </Wrapper>
    </ResponsiveWrapper>
  )
};

export default CardList;
