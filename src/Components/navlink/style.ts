import styled from "styled-components";

export const LinkWrapper = styled.div`
  .nav-link {
    color: ${({theme}) => theme.color.white};
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      border-bottom: 1px solid ${({theme}) => theme.color.white};
      padding-bottom: .5rem;
      margin-top: .5rem;
    }
  }
`;
