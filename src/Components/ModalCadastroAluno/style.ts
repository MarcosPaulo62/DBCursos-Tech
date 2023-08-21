import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 5;
  position: fixed; /* Stay in place */
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 65vh;
  background-color: #e8e8e8;
  border-radius: 16px;
`;

export const Form = styled.form`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const InputBg = styled.input`
  all: unset;
  width: 90%;
  border-radius: 0.5rem;
  border: 1px solid #504c4c;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: #fff;
`;
export const InputMd = styled.input`
  all: unset;
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid #504c4c;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: #fff;
`;
export const InputSm = styled.input`
  all: unset;
  width: 30%;
  border-radius: 0.5rem;
  border: 1px solid #504c4c;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: #fff;
`;
export const Spacer = styled.div`
  display: flex;
  gap: 2%;
`
export const Button = styled.button`
  padding: 1rem 3rem;
  background-color: ${({theme}) => theme.color.blue};
  color: ${({theme}) => theme.color.white};
  border-radius: 16px;
  font-size: 1rem;
  margin-top: 1rem;
  &:hover{
    background-color: ${({theme}) => theme.color.mediumBlue};;
  }
  
  `

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding-right: 1rem;

`;
