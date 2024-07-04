import React from 'react';
import { useNavigate } from "react-router-dom";

//link
import { KAKAO_LINK } from '../../config/config';

//img
import kakao from '../../assets/login/kakao.png'
import naver from '../../assets/login/naver.png'
import google from '../../assets/login/google.png'
import github from '../../assets/login/github.png'

//style
import {
    MobileContainer,
    Logo,
    JoinContainer,
    SNSIcon,
} from './style'

const Login = () => {
    const navigate = useNavigate();
    const kakaoLoginHandler = () => {
        window.location.href = KAKAO_LINK;
    };
    const goFranchisee = () => {
        navigate("/Franchisee");
    }
    return (
        <MobileContainer>
            <Logo />
            <div onClick={goFranchisee}>
                가맹점 등록하기
            </div>
            <JoinContainer>
                <SNSIcon
                    src={kakao}
                    alt='kakao'
                    onClick={kakaoLoginHandler}
                />
                <SNSIcon src={naver} alt='naver' />
                <SNSIcon src={google} alt='google' />
                <SNSIcon src={github} alt='github'/>
            </JoinContainer>
        </MobileContainer>
    );
};

export default Login;