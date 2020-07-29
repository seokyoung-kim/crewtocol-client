import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import WriteForm from '../../components/writeForm/WriteForm';
import useInput from '../../lib/hooks/useInput';
import axios from 'axios';

const WriteFormContainer = () => {
  const { id } = useParams();

  const [headCount, setHeadCount] = useState();
  const [language, setLanguage] = useState();
  const [location, setLocation] = useState();

  const history = useHistory();
  const titleInput = useInput('');
  const contentInput = useInput('');

  const onSubmit = (e) => {
    axios.post('http://localhost:8080/api/v1/study', {
      title: titleInput.value,
      content: contentInput.value,
      // location:
      // language:
      // headCount
    });
    history.push(`/detail/${id}`);
  };

  return (
    <WriteForm
      titleInput={titleInput}
      contentInput={contentInput}
      onSubmit={onSubmit}
    />
  );
};

export default WriteFormContainer;
