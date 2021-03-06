import styled from "styled-components";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const CardDescription = styled.p`
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardHeader = styled.h1`
  color: var(--black);
  font-size: 2rem;
  font-weight: 200;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const PriceTag = styled.h3`
  font-size: 1.5rem;
  font-weight: 200;
  text-shadow: var(--white);
  color: var(--white);
`;

export const PriceTagWrapper = styled.div`
  position: absolute;
  background-color: rgba(1, 1, 1, 0.35);

  top: 20px;
  right: 20px;
`;

export const CardDiv = styled.div`
  width: 600px;
  height: 400px;

  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const FilledStar = styled(AiFillStar)`
  color: var(--denimBlue);
`;

export const OutlineStar = styled(AiOutlineStar)`
  background-color: var(--white);
`;
