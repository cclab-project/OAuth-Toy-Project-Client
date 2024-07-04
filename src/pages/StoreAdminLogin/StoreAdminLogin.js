import React, {useState} from 'react';

import {
    Container,
    InputForm,
    InputBox,
    InputText,
} from "./style";
const StoreAdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            </InputForm>
        </>
    );
};

export default StoreAdminLogin;