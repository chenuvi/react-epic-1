import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'antd'
import LogoUrl from './logo.svg'

const Header = styled.header`
    display:flex;
    align-items:center;
    padding:10px 100px;
    background-color:rgb(0,21,41);
    color: #fff;
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

const StyledButton = styled(Button)`
    margin-left:10px;
`

function Component() {
    const [isLogin,setIsLogin] = useState(false)
    return (
        <Header>
            <Logo src='' src={LogoUrl}></Logo>
            <nav>
                <StyledLink activeClassName='active' to='/' exact>首页</StyledLink>
                <StyledLink activeClassName='active' to='/history'>上传历史</StyledLink>
                <StyledLink activeClassName='active' to='/about'>关于</StyledLink>
            </nav>
            <Login>
                {
                   isLogin ? <>
                                    登录成功 <StyledButton  type="primary" onClick={() => setIsLogin(false)}>注销</StyledButton>
                             </>
                            :<>
                                <StyledButton type="primary" onClick={() => setIsLogin(true)}>登录</StyledButton>
                                <StyledButton  type="primary">注册</StyledButton>
                            </>
                }
                
            </Login>
        </Header>
    );
}

export default Component;