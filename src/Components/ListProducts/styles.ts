import styled from 'styled-components';

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 60px 0;
`;

export const Title = styled.h1`
    font: 400 1.4rem Roboto;
    margin-left: 5px;
`;

export const Content = styled.main`
     display: flex;
     margin-top: 20px;
     
`;

export const Product = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 25px;
    
`; 

export const Avaliacao = styled.div`
    display:flex;
`;

export const TitleProduct = styled.a`
    font: 300 .9rem Roboto;
    color: ${props => props.theme.colors.blue};
`;