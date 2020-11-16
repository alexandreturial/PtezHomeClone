import React from 'react';
import { Container } from './styles';


const Content: React.FC = ({children}) => {
    return(
       <Container className="contentMain">
          {children}
       </Container>
    );
}

export default Content;