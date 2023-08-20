import styled from "styled-components";

export const StyledEventsContainer = styled.aside`
  align-items: center;
  display: grid;
  gap: 2rem;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.color.blue};
  padding: 2rem 1rem;

  .title-span {
    align-self: flex-start;
  }

  .event-container {
    align-items: center;
    background-color: ${({theme}) => theme.color.white};
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;

    .date-day {
      color: ${({theme}) => theme.color.darkBlue};
      font-size: 2rem;
      font-weight: 600;
    }

    .date-month {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({theme}) => theme.color.darkBlue};
    }

    .span-up {
      color: ${({theme}) => theme.color.darkBlue};
      font-weight: 600;
    }

    .span-ups {
      color: ${({theme}) => theme.color.darkBlue};
      font-weight: 600;
    }

    .span-down {
      color: ${({theme}) => theme.color.darkBlue};
      font-weight: 600;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
