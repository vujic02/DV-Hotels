import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
    width: ${({w}) => w};
    height: ${({h}) => h};
    margin: ${({m}) => m};
    padding: ${({p}) => p};
    position: ${({pos}) => pos};
    top: ${({t}) => t};
    right: ${({r}) => r};
    left: ${({l}) => l};
    bottom: ${({b}) => b};
    background: ${({bg}) => bg};
    border-radius: ${({borR}) => borR};

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
    justify-items: ${({justify}) => justify};
    align-items: ${({align}) => align};

    @media screen and (max-width: 1366px) {
        grid-template-columns: ${({colsM1}) => colsM1};
        margin: ${({mM1}) => mM1};
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: ${({colsM2}) => colsM2};
        padding: ${({pM}) => pM};
        margin: ${({mM2}) => mM2};
        gap: ${({gridGapM}) => gridGapM};
    }
`

export const TextP = styled.p`
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    color: ${({col}) => col};
    margin: ${({m}) => m};
    padding: ${({p}) => p};
    text-align: ${({alignText}) => alignText};
    opacity: ${({opac}) => opac};

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
    padding: ${({p}) => p};
    text-align: ${({alignText}) => alignText};
    opacity: ${({opac}) => opac};
    position: ${({pos}) => pos};
    top: ${({t}) => t};
    right: ${({r}) => r};
    left: ${({l}) => l};
    bottom: ${({b}) => b};

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
    border-radius: ${({borR}) => borR};

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

export const Img = styled.img`
    width: ${({w}) => w};
    height: ${({h}) => h};
    object-fit: ${({objFit}) => objFit};
    object-position: ${({objPos}) => objPos};
    margin: ${({m}) => m};
    padding: ${({p}) => p};
    border-radius: ${({borR}) => borR};
`

export const DivImg = styled.div`
    background-image: url(${({bgImage}) => bgImage});
    background-position: ${({bgPos}) => bgPos};
    background-size: ${({bgSize}) => bgSize};
    border-radius: ${({borR}) => borR};
    width: ${({w}) => w};
    height: ${({h}) => h};
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
`

export const FilledStar = styled(AiFillStar)`
  color: ${({col}) => col};
  font-size: ${({fontS}) => fontS};
`;

export const EmptyStar = styled(AiOutlineStar)`
  color: ${({col}) => col};
  font-size: ${({fontS}) => fontS};
`;

export const StarContainer = styled.div`
  display: flex;
  position: ${({pos}) => pos};
  top: ${({t}) => t};
  left: ${({l}) => l};
  margin: ${({m}) => m};

  @media screen and (max-width: 768px) {
    top: ${({tM}) => tM};
  }
`