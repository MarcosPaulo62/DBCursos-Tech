import React from "react";
import styled from "styled-components";

export const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 55vh;
  font-family: Arial, sans-serif;
  color: ${({theme}) => theme.color.offWhite};
  background: rgb(28,88,248);
background: radial-gradient(circle, rgba(28,88,248,1) 0%, rgba(245,245,245,1) 100%);
`;

export const StatusCode = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;

  
`;

export const ReturnButton = styled.button`
    background-color: ${({theme}) => theme.color.blue};
    font-size: 1rem;
    height: 3.6rem;
    border-radius: 1rem;
    width: 15rem;
    color: ${({theme}) => theme.color.offWhite};
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: 0.4s;
    margin-top: 2rem;

    &:hover {
        transform: scale(1.03);
    }

`
