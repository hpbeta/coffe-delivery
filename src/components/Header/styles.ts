import styled from "styled-components";

export const ContainerHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    @media(max-width: 480px) {
        flex-direction: column;

        
        img {
            width: 70px;
            margin-bottom: 10px ;
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        position: relative;
        
    }
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #8047F8;
        background-color: #EBE5F9;
        padding: 0.5rem;
        border-radius: 5px;

        @media(max-width: 480px) {
        font-size: 9px;
        width: 100px;
 
    }
        
    }
    Button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F1E9C9;
        color: #C47F17;
        padding: 0.5rem;
        border-radius: 5px;
        width: 40px;
        border: none;
        cursor: pointer;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 50%;
        font-weight: bold;
        background-color: #C47F17;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        width: 15px;
        height: 15px;
        font-size: 10px;
        position: absolute;
        left: 205px;
        bottom: 20px;

        @media(max-width: 480px) {
      
            left: 140px;
            bottom: 20px;
       
      
     }
        
    }
`