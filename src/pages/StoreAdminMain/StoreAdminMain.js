import React, { useState } from 'react';

import {
    Container,
    InputForm,
    InputBox,
    InputText,
    KeyText,
    SubmitButton,
    Join,
    Title,
} from "./style";
const StoreAdminMain = () => {
    const [menuName, setMenuName] = useState('');
    const [menuCost, setMenuCost] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

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
    const submitHandler = () => {

    }
    return (
        <Container>
            <Title>
                가맹점 이름
            </Title>
            <InputForm>
                <InputBox>
                    <KeyText>
                        메뉴 이름
                    </KeyText>
                    <InputText
                        type="text"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <KeyText>
                        가격
                    </KeyText>
                    <InputText
                        type="text"
                        value={menuCost}
                        onChange={(e) => setMenuCost(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <KeyText>
                        가게 썸네일
                    </KeyText>
                    <InputText
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </InputBox>
            </InputForm>
            <SubmitButton onClick={() => {
                submitHandler();
            }}>
                메뉴 등록하기
            </SubmitButton>
        </Container>
    );
};

export default StoreAdminMain;