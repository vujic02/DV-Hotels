import styled from "styled-components"

export const Input = styled.input`
    border-radius: .4rem;
    border: 1px solid #c2c2c2;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    padding: .5rem .5rem;
    width: 100%;
`

export const BgContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background-image: url("./images/Endless-Constellation.svg");

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

export const AuthContainer = styled.div`
    position: relative;
    width: 40%;
    background: var(--white);
    display: flex;
    flex-direction: column;
    padding: 0 5%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`