import React from 'react'
import styled from 'styled-components'
import SvgHappy from '../icons/happy.svg'
import SvgAngry from '../icons/angry.svg'


const FaceLogo = styled.img`
  fill: rgb(0, 132, 255);
  width: 40px;
  height: 23px;
`
const DivBlue = styled.div`
    background-color: #c4e3ff;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #a6cef3;
    border-radius: 3px;
`

const DivRed = styled.div`
    margin-top: 20px;
    background-color: #fcc;
    color: #841c1c;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #f7aeae;
`



function About() {
    return (
        <>
        
            <h2>简介</h2>
            <DivBlue>
            <p>
                <FaceLogo src={SvgHappy}></FaceLogo>
                <span>图兔是一款可以将图片转化为链接的网站, 免费图床仅供分享图片使用，我们保留随时删除图片并举报上传违规图片者的权利</span>
            </p>
            </DivBlue>
            <DivRed>
                
                <h3> <FaceLogo src={SvgAngry}></FaceLogo>严禁上传及分享如下类型的图片：</h3>
                <ul>
                    <li>含有色情、暴力、宣扬恐怖主义的图片</li>
                    <li>侵犯版权、未经授权的图片</li>
                    <li>其他违反中华人民共和国法律的图片</li>
                </ul>
            </DivRed>
            <DivBlue>
                <h3><FaceLogo src={SvgHappy}></FaceLogo>作者相关</h3>
                <ul>
                    <li>邮箱：chenuvi@163.com</li>
                    <li>掘金主页：<a>https://juejin.im/user/1802854801607869</a></li>
                    <li>欢迎联系介绍工作呀！wechat ID: <b>AmChenKun</b></li>
                </ul>
            </DivBlue>

        </>
    );
}

export default About;
