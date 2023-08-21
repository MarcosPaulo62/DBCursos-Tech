import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${({theme}) => theme.color.blue};
  display: flex;
  height: 5rem;
  justify-content: space-between;
  padding: 0 6.5rem;
`;
