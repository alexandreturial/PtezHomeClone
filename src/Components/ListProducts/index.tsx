import React from 'react';

import {
    Container,
    Title,
    Content,
    Product,
    Avaliacao,
    TitleProduct
} from './styles';

interface IListProductsProps {
    title: string;
    products: {
        title: string;
        image: string;
    }[]
}

const ListProducts: React.FC<IListProductsProps> = ({
    title, products
}) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Content>
                {
                    products.map((itens) => (
                        <Product>
                            <img src={itens.image} alt="produto" />
                            <Avaliacao>
                                estrelas
                            </Avaliacao>
                            <TitleProduct href="#">
                                {itens.title}
                            </TitleProduct>
                        </Product>
                    ))
                }
            </Content>
        </Container>
    );
}

export default ListProducts;