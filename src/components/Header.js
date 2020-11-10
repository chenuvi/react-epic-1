import React, { useState, useEffect } from 'react';
import LogoUrl from '../icons/rabbit.svg';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useStores } from '../stores';
import { observer } from 'mobx-react';


const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #fff;
  color:#121212 ;
  min-width:1000px;
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  font-size: 15px;
`;

const Logo = styled.img`
  fill: rgb(0, 132, 255);
  width: 64px;
  height: 30px;
`;

const StyledLink = styled(NavLink)`
  color:#8590a6;
  margin-left: 30px;

  &.active {
    border-bottom: 1px solid #0084ff;
    color:#444;
    font-weight: 600;
  }
  &.is-active::after {
    right: 0;
    bottom: -1px;
    left: 0;
    height: 3px;
    background: #0084ff;
    content: "";
}
`;

const Login = styled.div`
  margin-left: auto;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;


const Component = observer(() => {
  const history = useHistory();
  const { UserStore, AuthStore } = useStores();

  const handleLogout = () => {
    AuthStore.logout();
  };

  const handleLogin = () => {
    history.push('/login');
  };

  const handleRegister = () => {
    history.push('/register');
  }

  useEffect(() => {
    UserStore.pullUser()
  })

  return (
    <Header>
      <Logo src={LogoUrl} />
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于图兔</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ? <>
            {UserStore.currentUser.attributes.username} <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
          </> : <>
              <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
              <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
            </>

        }
      </Login>

    </Header >
  );
});

export default Component;