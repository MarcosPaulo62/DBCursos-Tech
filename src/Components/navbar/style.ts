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
    transition: all 0.3s ease;

    &:hover {
      border-bottom: 1px solid ${({theme}) => theme.color.white};
      padding-bottom: 8px;
      margin-top: 8px;
    }

    &:last-child:hover {
      border: none;
    }
  }
`;
