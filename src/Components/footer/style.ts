import styled from "styled-components";

export const StyledContainerFooter = styled.footer`
  background-color: ${({theme}) => theme.color.darkBlue};
  display: flex;
  justify-content: space-between;
  padding: 3rem 10%;
  width: 100%;

  .information-container {
    display: flex;
    gap: 4rem;

    .bdcursos-institucional {
      display: flex;
      flex-direction: column;
      gap: 1.06rem;

      div {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        a {
          color: ${({theme}) => theme.color.white};
          cursor: pointer;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            border-bottom: 1px solid ${({theme}) => theme.color.white};
            height: calc(1.125rem + 1px);
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20.3rem;

    input {
      border: 1px solid ${({theme}) => theme.color.white};
      width: 20.3rem;
      height: 3.4rem;
      background-color: ${({theme}) => theme.color.darkBlue};
      border-radius: 0.5rem;
      margin-top: 0.56rem;
      margin-bottom: 2.06rem;
      color: ${({theme}) => theme.color.white};
    }

    input::placeholder {
      padding-left: 1.34rem;
      color: ${({theme}) => theme.color.white};
      font-size: 1rem;
      font-weight: 300;
    }

    .span-footer {
      text-align: left;
      width: 20.3rem;
    }
  }

  .social-network {
    align-items: center;
    display: flex;
    gap: 1.88rem;
    margin-top: 1.2rem;
    width: 20.3rem;

    a {
      color: ${({theme}) => theme.color.white};
      transition: all 0.5s ease;

      i {
        font-size: 1.75rem;
      }

      &:hover {
        color: ${({theme}) => theme.color.blue};
      }
    }

    img {
      width: 1.3rem;
      height: 1.43;
    }
  }
`;
