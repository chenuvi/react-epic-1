import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoUrl from './logo.svg'

const Header = styled.header`
    display:flex;
    align-items:center;
    padding:10px 100px;
    background-color:rgb(0,21,41)
`
const Logo = styled.img`
    height:30px;
`
const StyledLink = styled(NavLink)`
    color:#fff;
    margin-left:30px;

    &.active{
        border-bottom:1px solid #fff;
    }
`
const Login = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  margin-left: 10px;
`;

function Component() {
    return (
        <Header>
            <Logo src='' src={LogoUrl}></Logo>
            <nav>
                <StyledLink activeClassName='active' to='/' exact>首页</StyledLink>
                <StyledLink activeClassName='active' to='/history'>上传历史</StyledLink>
                <StyledLink activeClassName='active' to='/about'>关于</StyledLink>
            </nav>
            <Login>
                <Button>
                    <StyledLink to='/login'>登录</StyledLink>
                </Button>
                <Button>
                    <StyledLink to='/register'>注册</StyledLink>
                </Button>
            </Login>
        </Header>
    );
}

export default Component;