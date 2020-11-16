import React from 'react';

import arrowIcon from '../../Assets/arrow-signature.svg';

import Button from '../Button';

import { Container } from './styles';


const Assinatura: React.FC = () => {
  return (
    <Container>
        <span>
            <img src={arrowIcon} alt=""/>
        </span>
        <a>
            Assinatura Petz 
        </a>
        <Button color="#f15a40" textColor="#FFFFFF">
            10% OFF
        </Button>
        <small>
            Em todas as suas compras
        </small>
    </Container>
  );
}

export default Assinatura;