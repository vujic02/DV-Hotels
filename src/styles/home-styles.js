import styled from "styled-components";

export const LandingOverlay = styled.div`
    background-image: url(${({bgImage}) => bgImage});
    background-position: ${({bgPos}) => bgPos};
    background-size: ${({bgSize}) => bgSize};
    width: ${({w}) => w};
    height: ${({h}) => h};
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
`
