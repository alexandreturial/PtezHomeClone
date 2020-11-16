import React from 'react';

import MenuImg from '../../Assets/cachorro.jpg';
import arrowLeft from '../../Assets/017-right-arrow-2.svg';

import {
  Container,
  Lista,
  Itens,
  ItemContainer,
  ItemLista

} from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const HeaderOptions: React.FC = () => {
  return (
    <Container>
      <Lista InLine={true} >
        <Itens >
          Cachorros
            <ItemContainer id="menuItem">
              <Lista InLine={false} >
                {
                  data.map((indicator) => (
                    <ItemLista >
                      teste
                      <span>
                        <img src={arrowLeft} alt="" />
                      </span>
                      <div id="itensList">
                        teste1
                      </div>
                    </ItemLista>
                  ))

                }
              </Lista>
             
              <img src={MenuImg} alt="" />
            </ItemContainer>
        </Itens>
        <Itens >
          Gatos
            <ItemContainer id="menuItem">
            <Lista InLine={false} >
              <Itens >
                teste
                </Itens>
            </Lista>
            <img src={MenuImg} alt="" />
          </ItemContainer>
        </Itens>
        <Itens >
          Passaros
            <ItemContainer id="menuItem">
            <Lista InLine={false} >
              <Itens >
                teste
                </Itens>
            </Lista>
            <img src={MenuImg} alt="" />
          </ItemContainer>
        </Itens>
        <Itens >
          Peixes
            <ItemContainer id="menuItem">
            <Lista InLine={false} >
              <Itens >
                teste
                </Itens>
            </Lista>
            <img src={MenuImg} alt="" />
          </ItemContainer>
        </Itens>
        <Itens >
          Outros Pets
            <ItemContainer id="menuItem">
            <Lista InLine={false} >
              <Itens >
                teste
                </Itens>
            </Lista>
            <img src={MenuImg} alt="" />
          </ItemContainer>
        </Itens>
        <Itens >
          Casa e Jardim
            <ItemContainer id="menuItem">
            <Lista InLine={false} >
              <Itens >
                teste
                </Itens>
            </Lista>
            <img src={MenuImg} alt="" />
          </ItemContainer>
        </Itens>
        <Itens >
          Promoções
            <ItemContainer id="menuItem">
            <Lista InLine={false} >
              <Itens >
                teste
                </Itens>
            </Lista>
            <img src={MenuImg} alt="" />
          </ItemContainer>
        </Itens>
        <Itens >
          Blog
          </Itens>
        <Itens >
          E-Comerce
          </Itens>
      </Lista>
    </Container>
  );
}

export default HeaderOptions;