import { styled } from "styled-components";

export const NavbarDashboardWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkBlue};
  width: 30%;
  height: 100vh;
  padding: 2rem 1.5rem;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;
  }

  .greeting {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    margin-bottom: 2rem;
    span {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      color: ${({ theme }) => theme.color.white};
      padding: 1rem 2rem;
      font-size: 1.3rem;
      width: 100%;
      text-align: start;
      transition: all 0.3s ease-in;
      border-radius: 0.8rem;
      &:hover {
        color: ${({ theme }) => theme.color.blue};
      }
    }
    .onfocus {
      background: ${({ theme }) => theme.color.blue};
      transition: all 0.3s ease-in;
      &:hover {
        opacity: 0.8;
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  .logout {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
    span {
      font-size: 1.3rem;
    }
  }
`;
