import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import EditForm from '../../components/editForm/EditForm';
import useInput from '../../lib/hooks/useInput';
import axios from 'axios';

const EditFormContainer = () => {
  const [data, setData] = useState('');
  
  const { id } = useParams();

  const [headCount, setHeadCount] = useState();
  const [language, setLanguage] = useState();
  const [location, setLocation] = useState();

  const history = useHistory();
  const titleInput = useInput('');
  const contentInput = useInput('');

  const onEdit = useCallback(async (e) => {
    await axios.put(`http://localhost:8080/api/v1/study/${id}`, {
      title: titleInput.value,
      content: contentInput.value,
      location: location,
      language: language,
      headCount: headCount,
    });
    history.push(`/detail/${id}`);
  });

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/study/${id}`);
    setData(data);
    console.log(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data) {
    const { title, content, language, location, headCount } = data;

    titleInput.setValue(title);
    contentInput.setValue(content);
    setLocation(location);
    setLanguage(language);
    setHeadCount(headCount);
  }
  }, [data]);

  return (
    <EditForm
      titleInput={titleInput}
      contentInput={contentInput}
      onEdit={onEdit}
      data={data}
      headCount={headCount}
      language={language}
      location={location}
      setHeadCount={setHeadCount}
      setLanguage={setLanguage}
      setLocation={setLocation}
    />
  );
};

export default EditFormContainer;
