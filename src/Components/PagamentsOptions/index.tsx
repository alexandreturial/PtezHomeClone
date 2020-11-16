import React from 'react';

import motoIcon from '../../Assets/motoIcon.svg';
import truckIcon from '../../Assets/truckIcon.svg';
import cardIcon from '../../Assets/cardIcon.svg';
import HomeIcon from '../../Assets/homeIcon.svg';

import { 
    Container,
    Content,
    Icon,
    SubTitle,
    Title 

} from './styles';

const PagamentsOptions: React.FC = () => {
  return (
    <Container>
        <Content>
            <Icon src={motoIcon}/>
            <Title>
                Receba em Horas
                <SubTitle href="#">
                    ver regras
                </SubTitle>
            </Title>
            
        </Content>
        <Content>
            <Icon src={truckIcon}/>
            <Title>
                Receba em Horas
                <SubTitle href="#">
                    ver regras
                </SubTitle>
            </Title>
        </Content>
        <Content>
            <Icon src={cardIcon}/>
            <Title>
                Receba em Horas
                <SubTitle href="#">
                    ver regras
                </SubTitle>
            </Title>
        </Content>
        <Content>
            <Icon src={HomeIcon}/>
            <Title>
                Receba em Horas
                <SubTitle href="#">
                    ver regras
                </SubTitle>
            </Title>
        </Content>
    </Container>
  );
}

export default PagamentsOptions;