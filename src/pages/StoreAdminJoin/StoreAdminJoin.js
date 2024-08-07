import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import {
    Container,
    InputForm,
    InputBox,
    InputText,
    SubmitButton,
    SelectText,
    Join,
    Title,
} from './style';
const StoreAdminJoin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [auth, setAuth] = useState('');
    const handleSelectChange = (event) => {
        setAuth(event.target.value);
    };

    const submitHandler = async () => {
        if (password !== passwordCheck) {
            alert("비밀번호가 서로 다릅니다.");
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL2}/open-api/store-user/register`, {
                storeName: name,
                email: email,
                password: password,
                role: auth,
            });
            console.log(response.data);
            navigate("/AdminLogin");
        } catch (error) {
            console.log('에러');
        }
    }


    return (
        <>
            <Container>
                <Title>
                    Join
                </Title>
                <InputForm>
                    <InputBox>
                        <InputText
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='스토어 이름' />
                    </InputBox>
                    <InputBox>
                        <InputText
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='이메일' />
                    </InputBox>
                    <InputBox>
                        <InputText
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='비밀번호' />
                    </InputBox>
                    <InputBox>
                        <InputText
                            type="text"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            placeholder='비밀번호 확인' />
                    </InputBox>
                    <InputBox>
                        <SelectText value={auth} onChange={handleSelectChange}>
                            <option value="">--권한을 선택해주세요--</option>
                            <option value="MASTER">MASTER</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </SelectText>
                    </InputBox>
                    <SubmitButton onClick={submitHandler}>
                        회원가입
                    </SubmitButton>
                </InputForm>
            </Container>
        </>
    );
};

export default StoreAdminJoin;