import React from 'react';

import Select from '../Select';


import {
    Container

} from './styles';

const LinkTreeHeader: React.FC = () => {
    return (
        <Container>
            <ul>
                <li>
                    <Select label="Faça login ou Cadastre-se" name="teste" />
                </li>
                <li>
                    <a href="#">Criar assinatura</a>
                </li>
                <li>
                    <a href="#">Repetir Pedido</a>
                </li>
                <li>
                    <a href="#">Lojas</a>
                </li>
                <li>
                    <Select label="Atendimento" name="teste" />
                </li>
            </ul>
        </Container>
    );
}

export default LinkTreeHeader;