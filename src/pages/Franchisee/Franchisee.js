import React, { useState } from 'react';
import axios from 'axios';
import {
    MobileContainer,
    Title,
    InputForm,
    InputBox,
    KeyText,
    SelectText,
    InputText,
    SubmitButton,
} from './style';
const Franchisee = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [minDeliveryAmount, setMinDeliveryAmount] = useState('');
    const [call, setCall] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const handleSelectChange = (event) => {
        setCategory(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnail(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('storeCategory', category);
        formData.append('minimumAmount', minAmount);
        formData.append('minimumDeliveryAmount', minDeliveryAmount);
        formData.append('phoneNumber', call);
        if (thumbnail) {
            const blob = new Blob([thumbnail], { type: thumbnail.type });
            formData.append('thumbnail', blob, thumbnail.name);
        }
        for (const x of formData) {
            console.log(x);
        };
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/open-api/store/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('둥록 완료');
            console.log(response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    }
    return (
        <MobileContainer>
            <Title>
                가맹점 등록하기
            </Title>
            <InputForm>
                <InputBox>
                    <KeyText>
                        가게이름
                    </KeyText>
                    <InputText
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </InputBox>
                <InputBox>
                    <KeyText>
                        주소
                    </KeyText>
                    <InputText
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </InputBox>
                <InputBox>
                    <KeyText>
                        가게 카테고리
                    </KeyText>
                    <SelectText id="category-select" value={category} onChange={handleSelectChange}>
                        <option value="">--카테고리를 선택해주세요--</option>
                        <option value="CHINESE_FOOD">중식</option>
                        <option value="WESTERN_FOOD">양식</option>
                        <option value="KOREAN_FOOD">한식</option>
                        <option value="JAPANESE_FOOD">일식</option>
                        <option value="CHICKEN">치킨</option>
                        <option value="PIZZA">피자</option>
                        <option value="HAMBURGER">햄버거</option>
                        <option value="COFFEE_TEA">커피&차</option>
                    </SelectText>
                </InputBox>
                <InputBox>
                    <KeyText>
                        주문 최소금액
                    </KeyText>
                    <InputText
                        type="text"
                        value={minAmount}
                        onChange={(e) => setMinAmount(e.target.value)} />
                </InputBox>
                <InputBox>
                    <KeyText>
                        배달 주문 최소 금액
                    </KeyText>
                    <InputText
                        type="text"
                        value={minDeliveryAmount}
                        onChange={(e) => setMinDeliveryAmount(e.target.value)} />
                </InputBox>
                <InputBox>
                    <KeyText>
                        전화번호
                    </KeyText>
                    <InputText
                        type="text"
                        value={call}
                        onChange={(e) => setCall(e.target.value)} />
                </InputBox>
                <InputBox>
                    <KeyText>
                        가게 썸네일
                    </KeyText>
                    <InputText
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </InputBox>
                <SubmitButton onClick={handleSubmit}>
                    가맹점 등록 완료
                </SubmitButton>
            </InputForm>
        </MobileContainer>
    );
};

export default Franchisee;