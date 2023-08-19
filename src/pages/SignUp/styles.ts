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
`;
