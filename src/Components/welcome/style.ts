import styled from "styled-components"

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.blue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45vw;
  height: 180px;
  border-radius: 16px;
  padding: 3rem;
`;
export const DivImg = styled.div`
  width: 40%;
  height: 100%;
`

export const Img = styled.img`

`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
`;