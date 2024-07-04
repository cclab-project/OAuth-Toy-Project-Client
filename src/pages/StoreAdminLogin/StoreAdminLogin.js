import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import {
    Container,
    InputForm,
    InputBox,
    InputText,
    SubmitButton,
    Join,
} from "./style";
const StoreAdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goAdminJoin = () => {
        navigate("/AdminJoin");
    }
    return (
        <>
            <Container>
                CClab Delivery 관리자 로그인
            </Container>
            <InputForm>
                <InputBox>
                    <InputText
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='이메일'/>
                </InputBox>
                <InputBox>
                    <InputText
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='비밀번호'/>
                </InputBox>
                <SubmitButton>
                    로그인
                </SubmitButton>
                <Join onClick={goAdminJoin}>
                    관리자 회원가입
                </Join>
            </InputForm>
        </>
    );
};

export default StoreAdminLogin;