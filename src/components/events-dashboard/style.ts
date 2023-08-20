import styled from "styled-components";

export const StyledEventsContainer = styled.aside`
  width: 13.6rem;
  height: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.31rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.blue};

  .title-span {
    align-self: flex-start;
    margin-left: 1.5rem;
    margin-top: 1.44rem;
  }

  div {
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 10.5rem;
    height: 7rem;
    border-radius: 1rem;

    .date-day {
      color: ${({ theme }) => theme.color.darkBlue};
      font-size: 2rem;
      font-weight: 600;
      margin-top: 1.31rem;
      margin-left: 1.2rem;
    }

    .date-month {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.darkBlue};
      margin-bottom: 2rem;
      margin-left: 1.2rem;
    }

    .span-up {
      color: ${({ theme }) => theme.color.darkBlue};
      font-weight: 600;
      margin-top: 2.5rem;
      margin-right: 0.87rem;
    }

    .span-ups {
      color: ${({ theme }) => theme.color.darkBlue};
      font-weight: 600;
      margin-top: 1.5rem;
      margin-right: 0.87rem;
    }

    .span-down {
      color: ${({ theme }) => theme.color.darkBlue};
      font-weight: 600;
      margin-bottom: 2.2rem;
      margin-right: 0.87rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.44rem;
    }
  }
`;
