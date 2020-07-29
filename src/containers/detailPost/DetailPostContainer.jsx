import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DetailPost from '../../components/detailPost/DetailPost';

const Wrapper = styled.div``;

const DetailPostContainer = () => {
  const [data, setData] = useState('');

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/study/${id}`);
    setData(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return (
    <Wrapper>
      <DetailPost data={data} id={id} />
    </Wrapper>
  );
};

export default DetailPostContainer;
