import styled from "styled-components";

export const CardDescription = styled.p`
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 600;
  padding: .9rem 0;
`;

export const CardHeader = styled.h1`
  position: absolute;
  bottom: 3rem;
  color: var(--white);
  font-size: 2rem;
  font-weight: 200;
  padding: .9rem 0;
  text-shadow: 1px 4px 4px #111;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const PriceTag = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 2px 4px 4px var(--black);
  color: var(--white);
`;

export const PriceTagWrapper = styled.div`
  position: absolute;
  background-color: rgba(1, 1, 1, 0.4);
  padding: .5rem .9rem;
  border-radius: 5px;

  top: 20px;
  right: 20px;
`;

export const CardDiv = styled.div`
  width: 100%;
  height: 450px;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

