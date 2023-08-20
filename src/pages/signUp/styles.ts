import { styled } from "styled-components";
import backgroundImg from "../../assets/background-login.jpg";

export const SignUpAndLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  .homeButton {
    all: unset;
    position: absolute;
    top: 5%;
    left: 5%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      color: ${({ theme }) => theme.color.darkBlue};
    }
    span {
      font-size: 1.2rem;
    }
  }
`;
