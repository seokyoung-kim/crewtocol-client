import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import Responsive from '../common/Responsive';
import colors from '../../styles/colors';
import SelectLang from '../selector/SelectLang';
import SelectLocal from '../selector/SelectLocal';
import SelectHeadCount from '../selector/SelectHeadCount';

const Wrapper = styled(Responsive)`
  margin-top: 40px;
  margin-bottom: 100px;
  max-width: 600px;
  /* border: 1px solid ${colors.gray[4]}; */
`;

const StudyForm = styled.div`
  min-height: 500px;
  margin-top: 40px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 24px;
  border-bottom: 2px solid ${colors.gray[5]};
`;

const FormItemWrapper = styled.div`
  margin-bottom: 30px;
`;

const ItemTitle = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

const Select = styled.select``;

const TitleForm = styled.div`
  margin-top: 50px;

  div {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 54px;
    padding: 0 16px;
    padding: 16px;
    border-radius: 8px;
    outline: none;
    border: 2px solid ${colors.gray[4]};
    font-size: 16px;

    &::placeholder {
      color: ${colors.gray[4]};
    }

    &:focus {
      border: 2px solid ${colors.indigo};
    }
  }
`;

const DescForm = styled.div`
  margin-top: 50px;

  div {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  min-height: 300px;
  padding: 16px;
  border-radius: 8px;
  outline: none;
  border: 2px solid ${colors.gray[4]};
  font-size: 16px;

  &::placeholder {
    color: ${colors.gray[4]};
  }

  &:focus {
    border: 2px solid ${colors.indigo};
  }
`;

const SubmitButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const SubmintButton = styled.button`
  background-color: #5856d6;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 0;
  width: 100%;
  justify-content: center;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;

const LangForm = ({ title, language, setLanguage }) => {
  return (
    <FormItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      <SelectLang language={language} setLanguage={setLanguage} />
    </FormItemWrapper>
  );
};

const LocationForm = ({ title, location, setLocation }) => {
  return (
    <FormItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      <SelectLocal location={location} setLocation={setLocation} />
    </FormItemWrapper>
  );
};

const HeadCountForm = ({ title, headCount, setHeadCount }) => {
  return (
    <FormItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      <SelectHeadCount headCount={headCount} setHeadCount={setHeadCount} />
    </FormItemWrapper>
  );
};

const EditForm = ({   
  titleInput,
  contentInput,
  onEdit,
  headCount,
  language,
  location,
  setHeadCount,
  setLanguage,
  setLocation, }) => {
  return (
    <Wrapper>
      <Title>수정하기</Title>
      <StudyForm>
        <LangForm
          title="언어를 지정해주세요"
          language={language}
          setLanguage={setLanguage}
        />
        <LocationForm
          title="지역을 지정해주세요"
          location={location}
          setLocation={setLocation}
        />
        <HeadCountForm
          title="인원수를 지정해주세요"
          headCount={headCount}
          setHeadCount={setHeadCount}
        />
        <TitleForm>
          <div>제목을 작성해주세요</div>
          <input
            value={titleInput.value}
            onChange={titleInput.onChange}
            placeholder="ex) C언어 기초공사 스터디"
          />
        </TitleForm>
        <DescForm>
          <div>자세한 내용을 작성해주세요</div>
          <StyledTextareaAutosize
            placeholder="ex) "
            value={contentInput.value}
            onChange={contentInput.onChange}
          />
        </DescForm>
        <SubmitButtonContainer>
          <SubmintButton onClick={onEdit}>수정하기</SubmintButton>
        </SubmitButtonContainer>
      </StudyForm>
    </Wrapper>
  );
};

export default EditForm;
