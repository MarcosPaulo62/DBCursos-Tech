import { styled } from "styled-components";

export const AuthenticationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.625rem;

  .page-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    button {
      width: 20rem;
      height: 5.9375rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: #504c4c;
      border-bottom: 3px solid #d9d9d9;
      cursor: pointer;
    }
    .onfocus {
      color: ${({ theme }) => theme.color.blue};
      border-bottom: 3px solid ${({ theme }) => theme.color.blue};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 2.5rem 2.5rem 2.5rem;
    .role-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5rem;
      button {
        width: 10.9rem;
        height: 4.25rem;
        text-align: center;
        font-weight: 500;
        font-size: 1.25rem;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
      .firstRoleButton {
        border-radius: 0.5rem 0rem 0rem 0.5rem;
        border: 1px solid #504c4c;
      }
      .secondRoleButton {
        border-top: 1px solid #504c4c;
        border-right: 1px solid #504c4c;
        border-bottom: 1px solid #504c4c;
      }
      .thirdRoleButton {
        border-radius: 0rem 0.5rem 0.5rem 0rem;
        border-top: 1px solid #504c4c;
        border-right: 1px solid #504c4c;
        border-bottom: 1px solid #504c4c;
      }
      .onrole {
        background-color: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.white};
        border: none;
      }
    }
    .input-container {
      width: 100%;
      position: relative;
      input {
        all: unset;
        width: 84.35%;
        border-radius: 0.5rem;
        border: 1px solid #504c4c;
        padding: 1.38rem 1.38rem 1.38rem 4rem;
        font-size: 1.5rem;
        font-weight: 300;
      }
      .icon {
        position: absolute;
        top: 1.3rem;
        left: 1.38rem
      }
      .eye {
        position: absolute;
        top: 1.3rem;
        right: 1.38rem;
        cursor: pointer;
        transition: all 0.3s ease-in;
        &:hover {
            transform: scale(1.1);
        }
      }
    }
    .submit {
      color: ${({ theme }) => theme.color.white};
      background-color: #5ab55e;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1.3rem 0;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      transition: opacity 0.3s ease-in;
      &:hover {
        opacity: 0.9;
      }
    }
  }

  .displayNone {
    display: none;
  }
`;
