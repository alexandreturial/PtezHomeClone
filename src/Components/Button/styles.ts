import styled from 'styled-components';

interface IButtonContainerProps{
    color:string;
    TextColor: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
    background-color: ${props => props.color};
    color: ${props => props.TextColor};

    font: 700 1rem Roboto;
    padding: 5px 10px;
    
    border-radius: 20px;
`;