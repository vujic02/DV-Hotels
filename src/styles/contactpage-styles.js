import styled from "styled-components";

export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid #111;
  border-radius: 3px;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  margin: 1rem 0;
  padding: 0.5rem;

  &:focus {
    outline: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
  background: ${({ bg }) => bg};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  border: ${({ bor }) => bor};
  border-radius: ${({ borR }) => borR};
  color: ${({ col }) => col};
  font-size: ${({ fontS }) => fontS};
  font-weight: ${({ fontW }) => fontW};
  cursor: pointer;
  position: ${({ pos }) => pos};
  top: ${({ t }) => t};
  right: ${({ r }) => r};
  bottom: ${({ b }) => b};
  left: ${({ l }) => l};

  &:hover {
    transition: all ease-in-out 0.3s;
    border: ${({ borH }) => borH};
    background: ${({ bgH }) => bgH};
    color: ${({ colH }) => colH};
  }
`;

export const Selection = styled.select`
  height: 30px;
  width: 100%;
  border: 1px solid #111;
  border-radius: 3px;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  margin: 1rem 0;

  &:focus {
    outline: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

export const TextArea = styled.textarea`
  height: 80px;
  width: 100%;
  border: 1px solid #111;
  border-radius: 3px;
  outline: none;
  font-weight: 500;
  resize: none;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 1rem 0;
  padding: 0.5rem;

  &:focus {
    outline: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;
