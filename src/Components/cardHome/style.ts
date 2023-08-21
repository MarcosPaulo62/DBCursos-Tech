import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8e8e8;
  width: 45vw;
  height: 130px;
  border-radius: 16px;
  padding: 3rem;
  cursor: pointer;

  &:hover{
    background-color: #D7D7D7;
  }
`
export const DivImg = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
`;

export const Paragraph = styled.p`
color: ${({ theme }) => theme.color.black};
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  `;

