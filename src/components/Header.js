import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <img src=''></img>
            <nav>
                <Link to='/'>首页</Link>
                <Link to='/history'>上传历史</Link>
                <Link to='/about'>关于</Link>
            </nav>
        </>
    );
}

export default Header;