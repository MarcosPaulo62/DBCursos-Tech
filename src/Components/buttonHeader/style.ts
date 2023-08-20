import styled from "styled-components";

export const ButtonWrapper = styled.button`
  all: unset;
  align-items: center;
  background-color: ${({theme}) => theme.color.darkBlue};
  border-radius: 0.75rem;
  cursor: pointer;
  color: ${({theme}) => theme.color.white};
  display: flex;
  justify-content: center;
  min-height: 2.5rem;
  padding: 0 1.125rem;
  transition: all 0.4s ease;

  &:hover {
    background-color: #070f26CC;
  }
`;
