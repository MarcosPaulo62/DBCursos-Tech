import styled from "styled-components";

export const StyledContainerFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.darkBlue};
  width: 100%;
  height: 18rem;

  .information-container {
    display: flex;
    gap: 6.75rem;
    margin-left: 6.75rem;

    .bdcursos-institucional {
      display: flex;
      flex-direction: column;
      gap: 1.06rem;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 8.6rem;
    height: 12rem;
    width: 20.3rem;
    margin-top: 4.25rem;

    input {
      border: 1px solid ${({ theme }) => theme.color.white};
      width: 20.3rem;
      height: 3.4rem;
      background-color: ${({ theme }) => theme.color.darkBlue};
      border-radius: 0.5rem;
      margin-top: 0.56rem;
      margin-bottom: 2.06rem;
    }

    input::placeholder {
      padding-left: 1.34rem;
      color: ${({ theme }) => theme.color.white};
      font-size: 1rem;
      font-weight: 300;
    }

    .span-footer {
      text-align: left;
      width: 20.3rem;
    }
  }

  .social-network {
    display: flex;
    align-items: center;
    width: 20.3rem;
    gap: 1.88rem;
    margin-top: 1.2rem;

    img {
      width: 1.3rem;
      height: 1.43;
    }
  }
`;
