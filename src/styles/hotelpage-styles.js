import styled from "styled-components";
import { AiOutlineEye, AiOutlineWifi } from "react-icons/ai";

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  color: #000;
`;

export const ViewIcon = styled(AiOutlineEye)`
  width: 60px;
  height: 60px;
  color: #000;
`;

export const WifiIcon = styled(AiOutlineWifi)`
  width: 60px;
  height: 60px;
  color: #000;
`;

export const Line = styled.div`
  width: ${({ w }) => w};
  height: 1px;
  background: #7d7d7d;
  align-self: ${({ align }) => align};
`;

export const Input = styled.input`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
  border: ${({ bor }) => bor};
  border-radius: ${({ borR }) => borR};
  outline: ${({ outL }) => outL};
  font-size: ${({ fontS }) => fontS};
  font-weight: ${({ fontW }) => fontW};
  color: ${({ col }) => col};
  padding: ${({ p }) => p};
`;

export const InputContainer = styled.div`
  display: inline-block;
  position: relative;

  .icon {
    position: absolute;
    top: 15px;
    right: 5px;
  }
`;

export const Selection = styled.select`
  width: 80px;
  height: 50px;
  outline: none;
  border-radius: 3px;
  border: 1px solid #fff;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 20px 0 5px;
`;
