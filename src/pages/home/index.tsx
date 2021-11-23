import React from 'react';
import logo from '../../assets/logo_header.svg';
import { CardProduct } from '../../components/card_product';
import { CardUser } from '../../components/card_user';
import CoffeeMachine from '../../assets/coffee_machine.svg';
import Freezer from '../../assets/freezer.svg';
import Drink from '../../assets/drink.svg';
import Thebar from '../../assets/logo-thebar.svg';
import Brastemp from '../../assets/logo-brastemp.svg';
import Consul from '../../assets/logo-consul.svg';
import Consul2 from '../../assets/logo-consul2.svg';
import {
  Container,
  Header,
  Left,
  LogoImg,
  TitleLeft,
  Right,
  Input,
  Cart,
  Search,
  Section,
  SectionDescription,
  TitleSection,
  DescriptionSection,
  ButtonSection,
  ButtonTitleSection,
  ContainerSectionCard,
  ContainerListCardCoffee,
  ContainerListCardFreezer,
  ContainerListCardDrink,
  Arrow,
  SubSection,
  TitleSuSection,
  Article,
} from './styles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Left>
          <LogoImg src={logo} />
          <TitleLeft>Nossas soluções</TitleLeft>
          <TitleLeft>Conheça a Jüssi</TitleLeft>
        </Left>
        <Right>
          <div>
            <Input placeholder="Buscar" />
            <Search />
          </div>
          <TitleLeft>Login</TitleLeft>
          <Cart />
        </Right>
      </Header>
      <Section>
        <SectionDescription>
          <TitleSection>Criamos lojas que vendem mais.</TitleSection>
          <DescriptionSection>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </DescriptionSection>
          <ButtonSection>
            <ButtonTitleSection>Veja nossas soluções</ButtonTitleSection>
          </ButtonSection>
        </SectionDescription>
        <ContainerSectionCard>
          <ContainerListCardFreezer>
            <CardProduct titleButton="Mais Detalhes" img={Freezer} />
          </ContainerListCardFreezer>
          <ContainerListCardCoffee>
            <CardProduct titleButton="Comprar em 12x" img={CoffeeMachine} />
          </ContainerListCardCoffee>
          <ContainerListCardDrink>
            <CardProduct titleButton="Adicionar à sacola" img={Drink} />
          </ContainerListCardDrink>
        </ContainerSectionCard>
      </Section>
      <SubSection>
        <TitleSuSection>Nossas principais lojas VTEX</TitleSuSection>
        <Arrow> {'-->'} </Arrow>
        <img src={Brastemp} />
        <img src={Consul2} />
        <img src={Consul} />
        <img src={Thebar} />
      </SubSection>
      <Article>
        <CardUser />
      </Article>
    </Container>
  );
}
