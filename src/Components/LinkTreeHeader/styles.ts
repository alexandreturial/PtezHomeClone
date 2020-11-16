import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 25px;
    
    ul {
        list-style-type: none;
        overflow: hidden;

        width:100%;

        li{
            float: left;
            margin-right: 1.5%;
            color: ${props => props.theme.colors.blue};
            font: 300 14px Roboto;
        }
        li >a {
            color: ${props => props.theme.colors.blue};
        }
        /* mouse over link */
        li >a:hover ~ body {
            background: #000000;
            
        }
        li:first-child{
            margin-right: 42%;
            
        }
        li:last-child{
            margin-left: 1%;
            
        }
    
    }

    
`;
