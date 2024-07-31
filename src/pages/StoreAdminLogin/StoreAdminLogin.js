import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
            const response = await axios.post('/login', {
                username: email,
                password: password,
            });
            console.log(response.data);
            // 로그인 성공 시 추가적인 작업을 여기에 작성하세요.
        } catch (error) {
            console.error('Error logging in:', error);
            // 로그인 실패 시 추가적인 작업을 여기에 작성하세요.
        }
    }
    const goAdminJoin = () => {
        navigate("/AdminJoin");
    }
    return (
        <>
            <Container>
                <Title>
                    CClab Delivery 관리자 로그인
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
                    <Join onClick={goAdminJoin}>
                        관리자 회원가입
                    </Join>
                </InputForm>
            </Container>
        </>
    );
};

export default StoreAdminLogin;