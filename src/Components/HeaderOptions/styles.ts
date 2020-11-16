import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0%{
        /* transform: translateY(-100px); */
        opacity: 0;
    }
    100%{
        /* transform: translateY(0px); */
        opacity: 1;
    }
`;

interface IItensProps {
    InLine: boolean;
}


export const Container = styled.div`
    grid-area:TO;
    width: 75%;
    margin-left: 50px;
   
`;

export const Lista = styled.ul<IItensProps>`
    width: 100%;
    list-style: none;
    
    display: flex;
    flex-direction: ${props => props.InLine === true? 'row' : 'column'};
    justify-content: space-between;
    border-right: ${props => props.InLine === true? 'none' : '1px solid #eeeeee'};
    cursor: pointer;
`;

export const Itens = styled.li`
    display: block;
    float: left;
    
    padding: 15px;
    
    color: ${props => props.theme.colors.blue}; 
    font: 700 1rem Roboto;

    #menuItem{
        display: none
    }
    
    &:hover{
        #menuItem{
            animation: ${animate} .5s;
            display: flex;
            position:fixed;
            
        } 
        background-color: ${props => props.theme.colors.white}; 

    }
    
`;

export const ItemContainer = styled.div`
    width: auto;
    height: auto;
    z-index: 3;
    display: flex;
    justify-content: space-around;

    margin-top: 15px;
    margin-left: -15px;
    
    background-color: ${props => props.theme.colors.white};

   
`;

export const ItemLista = styled.ul`
   width: 250px;
  
   display: flex;
   justify-content: space-between;
   align-items: baseline;

   
   :first-child{
    margin-top: 10px;
   }
   padding: 5px;

   #itensList{
       display: none;
       
      
   }

    span{
        width:6px;
        height:6px;
        align-items: baseline;
    }
   &:hover{
        background-color:#eeeeee;
        #itensList{
            display: flex;
            position: fixed;
        }
   }


`;
