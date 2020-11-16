import React from 'react';

import Input from '../Input/index';
import LinkTree from '../LinkTreeHeader';
import Optoions from '../HeaderOptions';

import LogoImg from '../../Assets/logo.png';
import bagImg from '../../Assets/shopping-bag.svg';

import {
  Container,
  Logo,
  Content

} from './styles';





const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo>
          <a>
            <img src={LogoImg} />
          </a>
        </Logo>
        <Content>
          <LinkTree />
          <div>
            <form>
              <Input name="buscar" />
              <button>Buscar</button>
            </form>
            <button>
              <img src={bagImg} alt="carrinho" />
              Meu Carrinho
            </button>
          </div>
        </Content>
      </div>
      <Optoions />
    </Container>
  );
}

export default Header;