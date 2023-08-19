import styled from "styled-components";
import heroImg from "../../assets/hero-img-1920.jpg";

export const HeroWrapper = styled.section`
  background: url(${heroImg}) center/cover no-repeat;
  height: 36.5625rem;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  padding-left: 15%;
  padding-top: 8%;
  width: 100%;

  h1 {
    color: #1c58f8;
    font-size: 4.375rem;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    span {
      color: #fff;
      font-weight: 400;
      text-shadow: none;
    }
  }

  p {
    color: #fff;
    font-size: 3rem;

    span {
      color: #1c58f8;
      font-weight: 600;
    }
  }
`;
