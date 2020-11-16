import React from 'react';

import Assinatura from '../../Components/Assinatura';
import Carrousel from '../../Components/Carroussel'; 

import Products from '../../Components/ListProducts'; 
import PagamentsOPrions from '../../Components/PagamentsOptions'; 

import produdoImg from '../../Assets/produto.jpg';


import { 
  Container, 
  HeaderContent, 
  MainContent 
} from './styles';


const products =[
  {
    title: 'ração',
    image: produdoImg
  },
  {
    title: 'ração',
    image: produdoImg
  },
  {
    title: 'ração',
    image: produdoImg
  },
  {
    title: 'ração',
    image: produdoImg
  },
  {
    title: 'ração',
    image: produdoImg
  },
  {
    title: 'ração',
    image: produdoImg
  },
]




const Home: React.FC = () => {
  return (
      <Container>
        <HeaderContent>
          <Assinatura />
          <Carrousel />
        </HeaderContent>
        <MainContent>
          <PagamentsOPrions></PagamentsOPrions>

          <Products title="Marcas mais bem avaliadas" products={products} />
          <hr/>
          <Products title="Favorito dos Cachorros" products={products} />
          <hr/>
          <Products title="Favorito dos gatos" products={products} />
          <hr/>
        </MainContent>
      </Container>
      
  );
}

export default Home;