import { styled } from "styled-components";

export const ConfirmExclusionCardWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 30%;
  width: 70vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    border-radius: 1rem;
    background: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 6rem;
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }
    p {
      font-size: 1.25rem;
    }
    .buttons {
      display: flex;
      gap: 4rem;
      button {
        font-size: 1.25rem;
        font-weight: 700;
        width: 11.625rem;
        padding: 1rem 0;
        color: ${({ theme }) => theme.color.white};
        border-radius: 1rem;
        transition: opacity 0.3s ease-in;
        &:hover {
          opacity: 0.8;
        }
      }
      .red {
        background-color: #fc0000;
      }
      .blue {
        background-color: ${({ theme }) => theme.color.darkBlue};
      }
    }
  }
`;
