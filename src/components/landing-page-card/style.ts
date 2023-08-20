import styled from "styled-components";

export const StyledContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;  
`

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  width: 21.25rem;
  height: 17rem;
  border: 1px solid ${({theme}) => theme.color.darkBlue};

  div{

    margin-top: 3.6rem;
    margin-bottom:4.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
  }
  

  .title {
    
    color: ${({ theme }) => theme.color.darkBlue};
    text-align: center;
    
  }


  


  .card-p {
    color: ${({ theme }) => theme.color.darkBlue};
    line-height: 1.25rem;
  }
`;
