import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${({theme}) => theme.color.blue};
  display: flex;
  height: 5rem;
  justify-content: space-between;
  padding: 0 6.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
