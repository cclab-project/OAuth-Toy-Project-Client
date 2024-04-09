import { styled } from 'styled-components';

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

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
`

export const Title = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
`

export const Label = styled.label`
    font-size: 18px;
    margin: 5px 0;
`

export const Input = styled.input`
    margin-left: 10px;
    width: 100px;
    height: 25px;
    border-radius: 10px;
`

export const Submit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0052A7;
    margin: 20px auto;
    color: white;
    width: 200px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
`