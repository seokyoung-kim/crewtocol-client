import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';
import Responsive from '../common/Responsive';

const Wrapper = styled(Responsive)`
  margin-top: 40px;
  margin-bottom: 100px;
  max-width: 600px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 24px;
  border-bottom: ${(props) => props.border && ` 2px solid ${colors.gray[5]}`};
`;

const PostInfoContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${colors.gray[5]};
`;

const Info = styled.div`
  display: flex;
  margin-bottom: 40px;
  height: 60px;
`;

const NameAndValue = styled.div`
  margin-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  width: 120px;
  margin-bottom: 8px;
  color: ${colors.gray[3]};
`;

const Value = styled.div``;

const ImgContainer = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DescriptionContainer = styled.div`
  margin: 50px 0;
  border-bottom: 2px solid ${colors.gray[5]};
  min-height: 300px;
  line-height: 1.6;
`;

const EditButton = styled.button`
  background-color: #228896;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 0;
  width: 300px;
  justify-content: center;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  // svg {
  //   margin-right: 8px;
  // }
`;

const DeleteButton = styled.button`
  background-color: #228896;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 0;
  width: 300px;
  justify-content: center;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  // svg {
  //   margin-right: 8px;
  // }
`;

const ButtonWrapper = styled.div`
display: flex;
gap: 20px;
`;

const PostInfo = ({ name, value, img }) => {
  return (
    <Info>
      <ImgContainer>
      {/* Please img Resource Form Check */}
        <img src={img} alt="thumbnail" />
      </ImgContainer>
      <NameAndValue>
        <Name>{name}</Name>
        <Value>{value}</Value>
      </NameAndValue>
    </Info>
  );
};

const DetailPost = ({ data, id, onDelete }) => {

  const {
    title,
    content,
    author,
    headCount,
    modifiedDate,
    location,
    language,
  } = data;

  const imgUrl = (data) => {
    switch (data) {
      case "C":
        return "https://user-images.githubusercontent.com/53217674/88876195-ba714b80-d25d-11ea-8229-e57e1f5410b7.png"
        break;
      case "C++" :
        return "https://user-images.githubusercontent.com/53217674/88882711-5d7d9180-d26d-11ea-8409-e72da38014a2.png"
        break;
      case "C#" :
        return "https://user-images.githubusercontent.com/53217674/88882723-5e162800-d26d-11ea-8166-e7649c40f809.png"
        break;
      case "Go" :
        return "https://user-images.githubusercontent.com/53217674/88882728-5eaebe80-d26d-11ea-8568-c81f7725b71b.png"
        break;
      case "Java" :
        return "https://user-images.githubusercontent.com/53217674/88882730-5f475500-d26d-11ea-9bdc-27dfb9399fad.png"
        break;  
      case "Javascript":
        return "https://user-images.githubusercontent.com/53217674/88882732-5f475500-d26d-11ea-893c-9bfd95e4f313.png"
        break;
      case "Kotlin" :
        return "https://user-images.githubusercontent.com/53217674/88882735-5fdfeb80-d26d-11ea-97c5-4a8b1fe84ea7.png"
        break;
      case "php" :
        return "https://user-images.githubusercontent.com/53217674/88882738-60788200-d26d-11ea-9702-2069b70ae461.png"
        break;
      case "Python" :
        return "https://user-images.githubusercontent.com/53217674/88882739-60788200-d26d-11ea-85f9-a8c958dd3cd3.png"
        break;
      case "Ruby" :
        return "https://user-images.githubusercontent.com/53217674/88882741-61111880-d26d-11ea-8b88-cdcbb8bf03e9.png"
        break;  
      case "Rust" :
        return "https://user-images.githubusercontent.com/53217674/88882742-61111880-d26d-11ea-9127-2b5a4fb9d7da.png"
        break;
      case "Swift" :
        return "https://user-images.githubusercontent.com/53217674/88882743-61a9af00-d26d-11ea-85ad-4349cc0d9cce.png"
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      <Title border>{title}</Title>
      <PostInfoContainer>
        <PostInfo
          name="언어"
          value={language}
          img={imgUrl(language)}
        />

        {/* <PostInfo
          name="작성자"
          value={author}
          img="https://user-images.githubusercontent.com/53934996/88776319-c3f8a600-d1c0-11ea-9027-2f0acfd0f26c.png"
        /> */}
        <PostInfo
          name="날짜"
          value={modifiedDate}
          img="https://user-images.githubusercontent.com/53934996/88776317-c3f8a600-d1c0-11ea-9f9d-3fef2789747c.png"
        />
        <PostInfo
          name="모집인원"
          value={`${headCount}명`}
          img="https://user-images.githubusercontent.com/53934996/88776323-c529d300-d1c0-11ea-9717-9c750d1e2a25.png"
        />
        <PostInfo
          name="위치"
          value={location}
          img="https://user-images.githubusercontent.com/53934996/88776316-c3600f80-d1c0-11ea-99e8-9318165251e1.png"
        />
      </PostInfoContainer>
      <DescriptionContainer>
        <Title>상세 정보</Title>
        {content}
      </DescriptionContainer>
      <ButtonWrapper>
        <Link to={`/edit/${id}`}>
          <EditButton>수정하기</EditButton>
        </Link>
        <DeleteButton onClick={onDelete}>삭제하기</DeleteButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default DetailPost;
