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
  display: flex;
  gap: 3.5rem;
  min-height: 44rem;
  padding: 4.75rem 0 9.75rem 6rem;

  img {
    width: 40%;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-top: 4rem;
    text-align: end;
    width: 40%;

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
    border-radius: 1rem;
    display: flex;
    max-width: 80%;
    margin: 0 auto;
    padding: 2.5rem 3rem;
    text-align: center;

    .about-content {
      color: ${({theme}) => theme.color.white};
      min-height: 21.25rem;
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

export const DoubtsFormSection = styled.section`
  background-color: ${({theme}) => theme.color.blue};
  padding: 3.5rem 0;
  margin-top: 8rem;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;

    img {
      width: 45%;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 40%;

      h2 {
        color: ${({theme}) => theme.color.white};
        font-weight: 700;
        margin: 0 0 0.5rem 0;
        padding: 0;
      }

      input,
      textarea {
        background-color: ${({theme}) => theme.color.white};
        border: 1px solid #504c4c;
        border-radius: 0.5rem;
        color: #504c4c;
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
        outline: none;
        padding: 0 2rem;
      }

      input {
        height: 4.5rem;
      }

      textarea {
        columns: 36;
        padding-top: 1.5rem;
        height: 13.125rem;
        resize: none;
      }

      button {
        align-self: flex-end;
      }
    }
  }
`;
