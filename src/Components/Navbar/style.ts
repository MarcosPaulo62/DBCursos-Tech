import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  align-items: center;
  display: flex;
  gap: 1.25rem;

  a {
    color: ${({theme}) => theme.color.white};
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
