import styled from 'styled-components';

interface IButtonProps{
    rigth?:number
}
interface IIndicatorProps{
    background?:boolean
}


export const Container= styled.div`
    display: flex;
`;

export const Button = styled.button<IButtonProps>`
    width: 30px;
    height: 30px;
    right: ${props => props.rigth ? '15px' : '98%'};
    z-index: 2;
    top: calc(50% - 15px);

    position: absolute;
   
    cursor: pointer;
    background: none;
`;

export const Indicator = styled.li<IIndicatorProps>`
    background: ${props => props.background ? props.theme.colors.blue : 'none'};
    width: 15px;
    height: 15px;
    display: inline-block;
    margin: 0 8px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.blue};
`;