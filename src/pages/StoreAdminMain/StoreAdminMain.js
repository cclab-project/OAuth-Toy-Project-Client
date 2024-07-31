import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Container,
    InputForm,
    InputBox,
    InputText,
    KeyText,
    SubmitButton,
    Join,
    Title,
    Hr,
    SseButton,
} from "./style";
const StoreAdminMain = () => {
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/open-api/store/temp`);
                console.log(response.data);
            } catch (error) {
                console.log('에러');
            }
        };
        getData();
    }, []);

    //메뉴추가
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

    //SSE 연결
    const [messages, setMessages] = useState([]);
    const [connected, setConnected] = useState(false);
    const [eventSource, setEventSource] = useState(null);
    const startSse = () => {
        const es = new EventSource(`${process.env.REACT_APP_SERVER_URL2}/api/sse/connect`);

        es.onopen = () => {
            setConnected(true);
            console.log('SSE connection opened');
        };

        es.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        es.onerror = (error) => {
            console.error('SSE Error:', error);
            setConnected(false);
            es.close();
        };

        setEventSource(es);
    };

    const stopSse = () => {
        if (eventSource) {
            eventSource.close();
            setConnected(false);
            console.log('SSE connection closed');
        }
    };

    const toggleSse = () => {
        if (connected) {
            stopSse();
        } else {
            startSse();
        }
    };
    
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
            <Hr />
            <div>
                <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>
                <SseButton onClick={toggleSse} $onSSE={connected}>
                    {connected ? 'Stop SSE' : 'Start SSE'}
                </SseButton>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message.message}</li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default StoreAdminMain;