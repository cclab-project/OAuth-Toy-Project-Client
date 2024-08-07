import React, { useState, useEffect } from 'react';


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
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/open-api/store/temp`);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.log('에러');
    //         }
    //     };
    //     getData();
    // }, []);

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

    const [messages, setMessages] = useState([]);
    const [messages_2, setMessages_2] = useState([]);
    useEffect(() => {
        const eventSource = new EventSource(`${process.env.REACT_APP_SERVER_URL2}/api/sse/connect`);

        eventSource.onopen = (event) => {
            console.log("see connect");
            console.log(event);
        };

        eventSource.onmessage = (event) => {
            console.log("data: " + event.data);
            // const newMessage = JSON.parse(event.data);
            // setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        // eventSource.addEventListener('new_thread', (event) => {
        //     const eventData = JSON.parse(event.data);
        //     setMessages_2(eventData);
        //     console.log("Received event:", eventData);
        // });
        // eventSource.onTimeout = (error) => {
        //     console.error('SSE TimeOut:', error);
        //     eventSource.onCompletion();
        // };

        // eventSource.onerror = (error) => {
        //     console.error('SSE Error:', error);
        //     eventSource.onCompletion();
        // };

        return () => {
            eventSource.onCompletion();
        };
    }, []);


    return (
        <Container>
            <h1>
                가맹점 이름
            </h1>
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
                <h1>주문 받기</h1>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message.message}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>주문 받기2</h1>
                <ul>
                    {messages_2.map((message, index) => (
                        <li key={index}>{message.message}</li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default StoreAdminMain;