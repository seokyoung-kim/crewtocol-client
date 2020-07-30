import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import colors from '../../styles/colors';

const Wrapper = styled.div`
  border: 1px solid ${colors.gray[4]};
  height: 340px;
  width: 280px;
  border-radius: 8px;
`;

const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
`;

const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }
`;

const CardContent = styled.div`
  padding: 0 20px;
  height: calc(100% - 140px);
  position: relative;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const Writer = styled.div`
  margin-bottom: 16px;
`;

const Date = styled.div`
  margin-bottom: 16px;
  padding-left: 12px;
`;

const Location = styled.div`
  margin-bottom: 16px;
  padding-right: 12px;
  border-right: 1px solid ${colors.gray[4]};
`;

const Count = styled.div`
  margin-bottom: 16px;
`;

const LocationAndDate = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.gray[3]};
  position: absolute;
  bottom: 0;
`;

const Card = ({ data }) => {
  const {
    id,
    title,
    modifiedDate,
    location,
    headCount,
    author,
    language,
  } = data;

  const imgUrl = (data) => {
    switch (data) {
      case 'C':
        return 'https://user-images.githubusercontent.com/53217674/88876195-ba714b80-d25d-11ea-8229-e57e1f5410b7.png';
        break;
      case 'C++':
        return 'https://user-images.githubusercontent.com/53217674/88882711-5d7d9180-d26d-11ea-8409-e72da38014a2.png';
        break;
      case 'C#':
        return 'https://user-images.githubusercontent.com/53217674/88882723-5e162800-d26d-11ea-8166-e7649c40f809.png';
        break;
      case 'Go':
        return 'https://user-images.githubusercontent.com/53217674/88882728-5eaebe80-d26d-11ea-8568-c81f7725b71b.png';
        break;
      case 'Java':
        return 'https://user-images.githubusercontent.com/53217674/88882730-5f475500-d26d-11ea-9bdc-27dfb9399fad.png';
        break;
      case 'Javascript':
        return 'https://user-images.githubusercontent.com/53217674/88882732-5f475500-d26d-11ea-893c-9bfd95e4f313.png';
        break;
      case 'Kotlin':
        return 'https://user-images.githubusercontent.com/53217674/88882735-5fdfeb80-d26d-11ea-97c5-4a8b1fe84ea7.png';
        break;
      case 'php':
        return 'https://user-images.githubusercontent.com/53217674/88882738-60788200-d26d-11ea-9702-2069b70ae461.png';
        break;
      case 'Python':
        return 'https://user-images.githubusercontent.com/53217674/88882739-60788200-d26d-11ea-85f9-a8c958dd3cd3.png';
        break;
      case 'Ruby':
        return 'https://user-images.githubusercontent.com/53217674/88882741-61111880-d26d-11ea-8b88-cdcbb8bf03e9.png';
        break;
      case 'Rust':
        return 'https://user-images.githubusercontent.com/53217674/88882742-61111880-d26d-11ea-9127-2b5a4fb9d7da.png';
        break;
      case 'Swift':
        return 'https://user-images.githubusercontent.com/53217674/88882743-61a9af00-d26d-11ea-85ad-4349cc0d9cce.png';
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <ImgSection>
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <img src={imgUrl(language)} />
          </ImgWrapper>
        </Link>
      </ImgSection>
      <CardContent>
        <Link to={`/detail/${id}`}>
          <Title>{title}</Title>
        </Link>
        <LocationAndDate>
          <Location>{location}</Location>
          <Date>{modifiedDate}</Date>
        </LocationAndDate>

        <Footer>
          <Writer>{author}</Writer>
          <Count>{`모집인원 : ${headCount}명`}</Count>
        </Footer>
      </CardContent>
    </Wrapper>
  );
};

export default Card;
