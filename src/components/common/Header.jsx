import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import Responsive from './Responsive';

const Wrapper = styled.div`
  /* border-bottom: 1px solid ${colors.gray[5]}; */
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(Responsive)`
  max-width: ${(props) => props.theme.containerWidth};

  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 32px;

  img {
    height: 100%;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  & + & {
    margin-left: 24px;
  }
`;

const Header = ({ isLoggedIn = false }) => (
  <Wrapper>
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <img src={require('../../assets/logo.png')} alt="" />
        </Logo>
      </Link>
      <Navigation>
        <Menu>
          <Link to="/about">소개</Link>
        </Menu>
        <Menu>
          <Link to="/community">커뮤니티</Link>
        </Menu>
        <Menu>
          {isLoggedIn ? (
            <Link to="/mypage">마이페이지</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Menu>
      </Navigation>
    </HeaderContainer>
  </Wrapper>
);

export default Header;
