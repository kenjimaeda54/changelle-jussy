import React from 'react';
import logo from '../../assets/logo_header.svg';
import {
  Container,
  Header,
  Left,
  LogoImg,
  TitleLeft,
  Right,
  Input,
  Cart,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Left>
          <LogoImg src={logo} />
          <TitleLeft>Nossas soluções</TitleLeft>
          <TitleLeft>Conheça a Jüssi</TitleLeft>
        </Left>
        <Right>
          <Input />
          <TitleLeft>Login</TitleLeft>
          <Cart width={22} height={15} />
        </Right>
      </Header>
    </Container>
  );
}
