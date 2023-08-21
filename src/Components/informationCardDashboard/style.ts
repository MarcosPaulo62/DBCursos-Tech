import styled from "styled-components";

export const StyledInformationCardDashboardContainer = styled.div`
    position: relative;

    .voltar{
        position: absolute;
        top: 16px;
        right: 32px;
        display: flex;
        align-items: center;
        border-radius: 16px;
        background-color: #E8E8E8;
        font-size: 1.2rem;
        font-weight: 700;
        padding: 1rem;
    }
`

export const StyledInformationCardDashboard = styled.div`

    width: 46.5rem;
    height: 37rem;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.color.blue};

    img {
        margin-top: -2rem;
        margin-left: -2.5rem;
    }

    .title-information{
        margin-bottom: 2.87rem;
        font-size: 1.5rem;

    }

    .block-span {
        display: inline-block;
        font-size: 1.5rem;
    }

    div{
        display: flex;
        flex-direction:column;
        margin-left: 6.5rem;       
        
    }

    .information-periodCh {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            margin: 0;
            justify-content:space-between;  
            margin-bottom: 3.38rem;          
        }

    .professor-tag{
        margin-bottom: 3.12rem;
        font-size: 1.5rem;
    }

    .description {
        margin-bottom: .5rem;
        font-size: 1.5rem;
        width: 34rem;
        text-align: justify;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content:end;
        margin-right: 2.8rem;
        gap: 1.63rem;
    }

    .editar, .remover {
        width: 11.6rem;
        height: 3.6rem;
        border-radius: 1rem;
        color: ${({theme}) => theme.color.white};
        font-size: 1.5rem;
        cursor: pointer;
    }

    .editar {        
        background-color: ${({theme}) => theme.color.darkBlue};

        &:hover {
        background-color: #000F38;
      }
    }
    
    .remover {        
        background-color: ${({theme}) => theme.color.error};

        &:hover {
        background-color: #8B0000;
      }
    }

    

    
`