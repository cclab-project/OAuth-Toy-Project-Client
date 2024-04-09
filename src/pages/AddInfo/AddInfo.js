import React, {useState} from 'react';

import {
    MobileContainer,
    BodyContainer,
    Title,
    Label,
    Input,
    Submit,
} from './style'
const AddInfo = () => {
    const [phoneNum, setPhoneNum] = useState('');
    const [name, setName] = useState('');

    return (
        <MobileContainer>
            <BodyContainer>
                <Title>
                    추가 정보를 입력해주세요
                </Title>
                <Label>
                    전화번호: 
                    <Input/>
                </Label>
                <Label>
                    나이:
                    <Input />
                </Label>
                <Submit>
                    제출
                </Submit>
            </BodyContainer>
        </MobileContainer>
    );
};

export default AddInfo;