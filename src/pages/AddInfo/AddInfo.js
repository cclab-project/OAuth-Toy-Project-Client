import React, {useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import {
    MobileContainer,
    BodyContainer,
    Title,
    Label,
    Input,
    Submit,
} from './style'
const AddInfo = () => {
    const location = useLocation();
    const [phoneNum, setPhoneNum] = useState('');
    const [age, setAge] = useState('');
    const userInfo = {...location.state}
    const submitHandler = async() => {
        try {
            console.log('userInfo: ', userInfo);
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/login/addInfo`, {
                email: userInfo.email,
                name: userInfo.name,
                phone: phoneNum,
                age: age,
            }
            );
            console.log('리스폰스: ', response);
            console.log('데이터: ', response.data);
            console.log('헤더: ', response.headers);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <MobileContainer>
            <BodyContainer>
                <Title>
                    추가 정보를 입력해주세요
                </Title>
                <Label>
                    전화번호: 
                    <Input
                        value={phoneNum}
                        onChange={(e) => {
                            setPhoneNum(e.target.value);
                        }}/>
                </Label>
                <Label>
                    나이:
                    <Input
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value);
                        }} />
                </Label>
                <Submit onClick={submitHandler}>
                    제출
                </Submit>
            </BodyContainer>
        </MobileContainer>
    );
};

export default AddInfo;