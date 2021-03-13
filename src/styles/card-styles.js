import styled from "styled-components";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const CardDescription = styled.p`
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 600;
  padding: .9rem 0;
`;

export const CardHeader = styled.h1`
  color: var(--black);
  font-size: 2rem;
  font-weight: 200;
  padding: .9rem 0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const PriceTag = styled.h3`
  font-size: 1.2rem;
  font-weight: 200;
  text-shadow: 2px 4px 4px var(--black);
  color: var(--white);
`;

export const PriceTagWrapper = styled.div`
  position: absolute;
  background-color: rgba(1, 1, 1, 0.35);
  padding: .3rem .5rem;
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

export const FilledStar = styled(AiFillStar)`
  color: var(--denimBlue);
  font-size: 1.5rem;
`;

export const OutlineStar = styled(AiOutlineStar)`
  color: var(--denimBlue);
  font-size: 1.5rem;
`;
