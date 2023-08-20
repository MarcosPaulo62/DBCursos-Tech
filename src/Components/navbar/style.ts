import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  align-items: center;
  display: flex;
  gap: 1.25rem;

  a {
    color: ${({theme}) => theme.color.white};
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      border-bottom: 1px solid ${({theme}) => theme.color.white};
      padding-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    &:last-child:hover {
      border: none;
    }
  }

  button {
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
      background-color: #070f26cc;
    }
  }
`;
