import styled from "styled-components";

export const Container = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
`

export const Title = styled.div`
    font-size: 32px;
`

export const InputForm = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    align-items: center;
`

export const InputBox = styled.div`
    margin: 10px 10px;
`

export const KeyText = styled.div`
    font-size: 18px;
`
export const InputText = styled.input`
    width: 280px;
    height: 30px;
`

export const SubmitButton = styled.div`
    cursor: pointer;
    border-radius: 5px;
    background: #2E4EF6;
    color: white;
    width: 290px;
    text-align: center;
    padding: 15px 0%;
    margin-top: 10px;
`

export const Join = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
`

export const Hr = styled.hr`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    border: 5px solid #EFEFEF;
`

export const SseButton = styled.div`
    cursor: pointer;
    border-radius: 5px;
    background: ${(props) => (props.$onSSE ? '#E32424' : '#20E400')};
    color: white;
    width: 290px;
    text-align: center;
    padding: 15px 0%;
    margin-top: 10px;
    
`