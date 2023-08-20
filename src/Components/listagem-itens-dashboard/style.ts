import { styled } from "styled-components";

export const StyledListagemContainer = styled.section`
  width: 70%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;

  .header {
    width: 100%;
    background-color: #000c2b;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.6rem 1.5rem 2.1rem;

    h2 {
      color: ${({ theme }) => theme.color.white};
      font-size: 1.5rem;
      font-weight: 600;
    }

    div {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      button {
        font-size: 1.1rem;
        padding: 0.7rem 1.4rem;
        border-radius: 16px;
        background-color: #1565c0;
        font-weight: 600;
        color: ${({ theme }) => theme.color.white};
      }

      input {
        background-color: ${({ theme }) => theme.color.darkBlue};
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.white};
        font-size: 1.25rem;
        font-weight: 300;
        padding: 1rem 2.3rem 1rem 0.7rem;
      }
    }
  }

  table {
    width: 100%;
    padding: 2rem 2.7rem 2.5rem;
    background-color: #e8e8e8;
    border-radius: 16px;

    thead th:nth-child(1),
    tbody td:nth-child(1) {
      text-align: start;
    }

    thead th:nth-child(2),
    tbody td:nth-child(2) {
      text-align: end;
    }

    thead th {
      font-size: 1.5rem;
      font-weight: 700;
      padding-bottom: 1rem;
    }

    tbody tr {
      font-size: 1.25rem;
      font-weight: 400;

      td:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      td {
        padding: 0.9rem 0;
        border-bottom: 1px solid #a8a8a8;
      }
    }
  }
`;
