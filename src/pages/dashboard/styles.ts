import { styled } from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;

  .body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.8rem 4rem;

    h2 {
      font-size: 1.5rem;
    }

    .elementos {
      display: flex;
      gap: 2rem;

      a {
        text-decoration: none;
      }
    }

    .cards {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;

      div {
        display: flex;
        gap: 2rem;
      }
    }
  }
`;
