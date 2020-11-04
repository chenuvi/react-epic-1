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

function Component() {
    return (
        <Header>
            <Logo src='' src={LogoUrl}></Logo>
            <nav>
                <StyledLink activeClassName='active' to='/' exact>首页</StyledLink>
                <StyledLink activeClassName='active' to='/history'>上传历史</StyledLink>
                <StyledLink activeClassName='active' to='/about'>关于</StyledLink>
            </nav>
        </Header>
    );
}

export default Component;