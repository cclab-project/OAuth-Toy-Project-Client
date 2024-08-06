import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

import {
    Container,
    InputForm,
    InputBox,
    InputText,
    SubmitButton,
    Join,
    Title,
} from "./style";
const StoreAdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL2}/login`, qs.stringify({
                username: email,
                password: password,
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true
            });
            console.log(response);
            navigate("/AdminMain");
        } catch (error) {
            console.error('Error logging in:', error);
            alert('로그인 실패');
        }
    }
    const noSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL2}/login`, qs.stringify({
                username: email,
                password: password,
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true
            });
            console.log(response);
        } catch (error) {
            console.error('Error logging in:', error);
            alert('로그인 실패');
        }
    }
    const goAdminJoin = () => {
        navigate("/AdminJoin");
    }
    return (
        <>
            <Container>
                <Title>
                    CClab Delivery 관리자 로그인입니다.
                </Title>
                <InputForm onSubmit={loginSubmitHandler}>
                    <InputBox>
                        <InputText
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='이메일' />
                    </InputBox>
                    <InputBox>
                        <InputText
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='비밀번호' />
                    </InputBox>
                    <SubmitButton type='submit'>
                        로그인
                    </SubmitButton>
                </InputForm>
                <Join onClick={goAdminJoin}>
                    관리자 회원가입
                </Join>
            </Container>
            <Container>
                <h2>리디이랙트X 로그인</h2>
                <InputForm onSubmit={loginSubmitHandler}>
                    <InputBox>
                        <InputText
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='이메일' />
                    </InputBox>
                    <InputBox>
                        <InputText
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='비밀번호' />
                    </InputBox>
                    <SubmitButton type='submit'>
                        로그인
                    </SubmitButton>
                </InputForm>
                <Join onClick={noSubmitHandler}>
                    관리자 회원가입
                </Join>
            </Container>
        </>
    );
};

export default StoreAdminLogin;