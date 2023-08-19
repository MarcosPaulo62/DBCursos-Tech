import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.color.darkBlue};
    width: 21.25rem;
    height:23.75rem;
    gap: 1.75rem;

    .title{
        margin-top:3.62rem;
        color: ${({theme}) => theme.color.white};
    }

    .footer-card {
        margin-bottom: 4rem;
    }
`