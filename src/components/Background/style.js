import styled from "styled-components";

import background from '../../assets/backdrop.webp'

export const BackgroundImg = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    object-fit: cover;
    background-size: cover;
    background-position: center center;
     @media(max-width: 600px) {
        width: 100vw;
        height: calc(var(--vh, 1vh) * 100);
        border-radius: 0px;
        overflow: hidden;
    }
`