import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Container, Title, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Title>E-commerce Shoes</Title>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
