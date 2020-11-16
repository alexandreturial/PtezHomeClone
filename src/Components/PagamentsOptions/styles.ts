import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;

    display: flex;
    justify-content: center;
    
    margin: 15px;
`;

export const Content = styled.div`
    display:flex;
    margin: 0 10px;
    height: 50px;

    padding: 0 25px;
    
    border-right: 1px solid #e6e6e6;
    
    &:last-child{
        border-right: none;
    }
`;

export const Icon = styled.img`
    margin-right: 15px;
`;

export const SubTitle = styled.a`
    font: 300 .8rem Roboto;
    color: ${props => props.theme.colors.balck};
    
    text-decoration: underline;
    
    cursor: pointer;
`;

export const Title = styled.h3`
    display:flex;
    flex-direction:column;

    font: 700 1.2rem Roboto;
`;

