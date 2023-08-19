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
  padding-top: 10%;
  width: 100%;

  h1 {
    color: ${({theme}) => theme.color.blue};
    font-size: 4.375rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    span {
      color: ${({theme}) => theme.color.white};
      font-weight: 400;
      text-shadow: none;
    }
  }

  p {
    color: ${({theme}) => theme.color.white};
    font-size: 3rem;

    span {
      color: ${({theme}) => theme.color.blue};
      font-weight: 600;
    }
  }
`;

export const SectionCardsWrapper = styled.section`
  align-items: center;
  background-color: ${({theme}) => theme.color.white};
  display: flex;
  flex-direction: column;
  padding-bottom: 8.125rem;
`;

export const SectionTitle = styled.h2`
  border-bottom: 3px solid ${({theme}) => theme.color.blue};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3.75rem;
  padding-top: 3.75rem;
`;

export const RegisterSectionWrapper = styled.section`
  background-color: ${({theme}) => theme.color.blue};
  color: ${({theme}) => theme.color.white};
  display: grid;
  gap: 3.5rem;
  grid-template-columns: 612px 1fr;
  padding: 4.75rem 12rem 9.75rem 6rem;

  div {
    align-items: flex-end;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 80%;
    justify-content: space-between;
    text-align: end;

    h3 {
      font-size: 3rem;
      font-weight: 600;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const AboutSectionWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  .about-container {
    background-color: ${({theme}) => theme.color.darkBlue};
    border-radius: 16px;
    display: flex;
    max-width: 80%;
    margin: 0 auto;
    padding: 2.5rem 3rem;
    text-align: center;

    .about-content {
      color: ${({theme}) => theme.color.white};
      height: 21.25rem;
      padding-top: 3rem;

      &:nth-child(2) {
        border-left: 3px solid ${({theme}) => theme.color.white};
        border-right: 3px solid ${({theme}) => theme.color.white};
        margin: 0 3.75rem;
        padding-left: 3.75rem;
        padding-right: 3.75rem;
      }

      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }
    }
  }
`;
