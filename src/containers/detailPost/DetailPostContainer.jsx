import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import DetailPost from '../../components/detailPost/DetailPost';

const Wrapper = styled.div``;

const DetailPostContainer = () => {
  const [data, setData] = useState('');
  const history = useHistory();

  const { id } = useParams();

  const onDelete = (e) => {
    axios.delete(`http://localhost:8080/api/v1/study/${id}`)
    history.push(`/`);
  }

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/study/${id}`);
    setData(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return (
    <Wrapper>
      <DetailPost 
        data={data} 
        id={id}
        onDelete={onDelete} />
    </Wrapper>
  );
};

export default DetailPostContainer;
