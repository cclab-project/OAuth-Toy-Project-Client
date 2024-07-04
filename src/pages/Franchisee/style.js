import styled from "styled-components";


export const MobileContainer = styled.div`
    width: 380px;
    height: 740px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    @media(max-width: 600px) {
        width: 100vw;
        height: calc(var(--vh, 1vh) * 100);
        border-radius: 0px;
        overflow: hidden;
    }
`

export const Title = styled.div`
    margin-top: 30px;
    color: #000;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`
export const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const InputBox = styled.div`
    margin-bottom: 10px;
`

export const KeyText = styled.div`

`

export const InputText = styled.input`
    width: 280px;
    height: 30px;
`

export const SelectText = styled.select`
    width: 290px;
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