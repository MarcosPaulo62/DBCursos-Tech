import styled from "styled-components";

export const ButtonWrapper = styled.button`
  all: unset;
  align-items: center;
  background-color: ${({theme}) => theme.color.darkBlue};
  border-radius: 12px;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 2.5rem;
  padding: 0 1.125rem;
`;
