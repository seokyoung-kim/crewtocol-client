import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import WriteForm from '../../components/writeForm/WriteForm';
import useInput from '../../lib/hooks/useInput';
import axios from 'axios';

const WriteFormContainer = () => {
  const [headCount, setHeadCount] = useState();
  const [language, setLanguage] = useState();
  const [location, setLocation] = useState();

  const history = useHistory();
  const titleInput = useInput('');
  const contentInput = useInput('');

  const onSubmit = useCallback(async (e) => {
    await axios.post(`http://localhost:8080/api/v1/study`, {
      title: titleInput.value,
      content: contentInput.value,
      location: location,
      language: language,
      headCount: headCount,
    });
    history.push(`/`);
  });

  return (
    <WriteForm
      titleInput={titleInput}
      contentInput={contentInput}
      onSubmit={onSubmit}
      headCount={headCount}
      language={language}
      location={location}
      setHeadCount={setHeadCount}
      setLanguage={setLanguage}
      setLocation={setLocation}
    />
  );
};

export default WriteFormContainer;
