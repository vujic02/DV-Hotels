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

    @media screen and (max-width: 1366px) {
        width: ${({wM1}) => wM1};
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({cols}) => cols};
    width: ${({w}) => w};
    height: ${({h}) => h};
    gap: ${({gridGap}) => gridGap};
    margin: ${({m}) => m};
    padding: ${({p}) => p};

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
    margin: ${({m}) => m};

    @media screen and (max-width: 768px) {
        font-size: ${({fontSM}) => fontSM};
        font-weight: ${({fontWM}) => fontWM};
    }
`

export const TextH1 = styled.h1`
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    color: ${({col}) => col};
    margin: ${({m}) => m};

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

    @media screen and (max-width: 768px) {
        padding: ${({pM}) => pM};
    }  
`

export const Button = styled.div`
    width: ${({w}) => w};
    height: ${({h}) => h};
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
    background: ${({bg}) => bg};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    border: ${({bor}) => bor};
    border-radius: ${({borR}) => borR};
    color: ${({col}) => col};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    cursor: pointer;

    &:hover {
        transition: all ease-in-out 0.3s;
        border: ${({borH}) => borH};
        background: ${({bgH}) => bgH};
        color: ${({colH}) => colH};
    }
`

export const SectionHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 6rem;
    margin: ${({m}) => m};
    padding: ${({p}) => p};

    .bottom-line {
        background: ${({lineCol}) => lineCol};
        width: 100px;
        height: 2px;
    }
`