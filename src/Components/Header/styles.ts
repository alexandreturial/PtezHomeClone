import styled from 'styled-components';

export const Container = styled.header`
    grid-area:TO;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;

    padding: 11px 20px 0px 12px;
    background-color: ${props => props.theme.colors.primary};

    div{
        display: flex;
    }
`;

export const Logo = styled.div`
    height: 100%;
    width: 12%;

    text-align: center;
   
    display: flex;
    align-items: center;
    justify-content: center;

   a{
       img{
        height: 75px;
        width: 110px;
       }
   }
`;

export const Content = styled.div`
    width: 80%;

   padding: 0 20px;

    display: flex;
    flex-direction: column;
    flex:1;

    align-items: center;
    justify-content: space-between;

    div{
        width: 100%;
        display: flex;
    }

    form{

        display: flex;
        width: 82%;
        button{
            width: auto;
            position: relative;
            right: 15px;
            justify-content: center;
            

            font-weight: 700;
            text-transform: uppercase;

            border-radius: 0px 5px 5px 0px;
        }
    }
   
   button{
        width: 18%;
        display:flex;
        align-items: center;

        background: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};

       font-size: 1em;
       padding: 11px 20px;
      
       border-radius: 5px;
      
       font-weight: 400;

       img{
           width: 20px;
           height: 20px;

           margin-right: 15px;
           
       }
   }

`;