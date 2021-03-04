import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
    width: ${({w}) => w};
    height: ${({h}) => h};
    margin: ${({m}) => m};
    padding: ${({p}) => p};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({cols}) => cols};
    width: ${({w}) => w};
    height: ${({h}) => h};

    @media screen and (max-width: 1366px) {
        grid-template-columns: ${({colsM1}) => colsM1};
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: ${({colsM2}) => colsM2};
    }
`

export const TextP = styled.p`
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    color: ${({col}) => col};

    @media screen and (max-width: 768px) {
        font-size: ${({fontSM}) => fontSM};
        font-weight: ${({fontWM}) => fontWM};
    }
`

export const Overlay = styled.div`
    width: ${({w}) => w};
    height: ${({h}) => h};
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
    background: ${({bg}) => bg};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
`