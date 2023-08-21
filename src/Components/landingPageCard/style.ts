import styled from "styled-components";

export const StyledContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: space-around;
  min-width: 80%;
`;

export const StyledCardContainer = styled.div`
  border-radius: 1rem;
  background-color: ${({theme}) => theme.color.offWhite};
  border: 1px solid ${({theme}) => theme.color.darkBlue};

  div {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    margin-bottom: 1rem;
    margin-top: 3.6rem;
    padding: 0 0.5rem;
  }

  .title {
    color: ${({theme}) => theme.color.darkBlue};
    text-align: center;
  }

  .card-p {
    color: ${({theme}) => theme.color.darkBlue};
    line-height: 1.25rem;
  }
`;
