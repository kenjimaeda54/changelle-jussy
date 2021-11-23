import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo_header.svg';
import { CardProduct } from '../../components/card_product';
import { CardUser } from '../../components/card_user';
import { api } from '../../service';
import { getInitialsCountry, Results } from '../../utils';
import Social from '../../assets/social.svg';
import WpCompany from '../../assets/wppcompany.svg';
import Jussi from '../../assets/jussi.svg';
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
  ButtonSearch,
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
  TitleArticle,
  ContainerCardUser,
  ArticleFooter,
  WrapArticleFooter,
  TitleWrapFooter,
  DescriptionArticleFooter,
  ButtonArticleFooter,
  TextButtonArticleFooter,
  FooterArticlePhoto,
  ArticleFooterImg,
  EffectArticleFooter,
  ContactSection,
  TitleSectionContact,
  SubtileContactContainer,
  SubTitleContact,
  Contatct,
  Footer,
  TitleFooter,
  WrapFooterInput,
  InputFooter,
  TextFooter,
  ContainerSocial,
} from './styles';

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<Results[]>([]);
  const [mounted, setMounted] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/?results=4');
        setUser(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!mounted) {
      fetchData();
    }
    return () => {
      setMounted(true);
    };
  });

  async function handleSearch() {
    setIsLoading(true);
    if (getInitialsCountry(userInput).length < 1) {
      return alert('Insira pais valido.');
    }
    try {
      const response = await api.get(
        `/?results=4&nat=${getInitialsCountry(userInput)}`,
      );
      setUser(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <div>
        <Header>
          <Left>
            <LogoImg src={logo} />
            <TitleLeft>Nossas soluções</TitleLeft>
            <TitleLeft>Conheça a Jüssi</TitleLeft>
          </Left>
          <Right>
            <div>
              <Input
                type="text"
                autoCorrect="on"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Buscar por pais"
              />
              <ButtonSearch
                canTouch={userInput.length > 3}
                disabled={userInput.length < 3}
                onClick={handleSearch}
              >
                <Search />
              </ButtonSearch>
            </div>
            <TitleLeft>Login</TitleLeft>
            <Cart />
          </Right>
        </Header>
        <Section>
          <SectionDescription>
            <TitleSection>Criamos lojas que vendem mais.</TitleSection>
            <DescriptionSection>
              A Jüssi é especialista na criação de lojas usando a plataforma
              VTEX. Precisa criar sua loja ou migrar de plataforma?
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
          <div>
            <TitleArticle>Nossos colaboradores</TitleArticle>
            <ContainerCardUser>
              {user.map((item) => (
                <CardUser
                  key={item.login.uuid}
                  results={item}
                  isLoading={isLoading}
                />
              ))}
              ;
            </ContainerCardUser>
            <ArticleFooter>
              <WrapArticleFooter>
                <TitleWrapFooter> Olá, somos a Jüssi </TitleWrapFooter>
                <DescriptionArticleFooter>
                  A Jüssi é uma agência integrante do grupo global WPP que vem
                  há 10 anos consolidando o pensamento voltado para produtos e
                  resolução de problemas. Nosso área dedicada exclusivamente
                  para Produtos Digitais é organizada em 6 especialidades:
                  Product Managamenet, User Experience Design, SEO, Tecnologia,
                  Agile e User Behavior Analytics.{' '}
                </DescriptionArticleFooter>
                <ButtonArticleFooter>
                  <TextButtonArticleFooter>
                    Conheça a Jüssi{' '}
                  </TextButtonArticleFooter>
                </ButtonArticleFooter>
              </WrapArticleFooter>
              <FooterArticlePhoto>
                <ArticleFooterImg src={Jussi} alt="Image from Jussi" />
                <EffectArticleFooter />
              </FooterArticlePhoto>
            </ArticleFooter>
          </div>
        </Article>
        <ContactSection>
          <TitleSectionContact>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </TitleSectionContact>
          <SubtileContactContainer>
            <SubTitleContact>Entre em contato</SubTitleContact>
            <Contatct>comercial@jussi.com.br</Contatct>
          </SubtileContactContainer>
        </ContactSection>
        <Footer>
          <TitleFooter>
            receba novidades da nossa área de produtos digitais.
          </TitleFooter>
          <WrapFooterInput>
            <InputFooter placeholder="Digite seu e-mail" />
            <TextFooter>CADASTRAR</TextFooter>
          </WrapFooterInput>
        </Footer>
        <ContainerSocial>
          <img src={WpCompany} alt="image footer wp company" />
          <img src={Social} alt="image footer social" />
        </ContainerSocial>
      </div>
    </Container>
  );
}
