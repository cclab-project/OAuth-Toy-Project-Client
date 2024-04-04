import styled from "styled-components";

import logo from '../../assets/login/logo.png'
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

export const Logo = styled.img.attrs({
    src: logo,
    alt: 'logo'
})`
    margin-top: 20px;
    width: 300px;
`

export const JoinContainer = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
`

export const SNSIcon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`
