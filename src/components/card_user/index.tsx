import React from 'react';
import {
  Container,
  Photo,
  Title,
  Description,
  Feature,
  Button,
  TextButton,
  SectionFeature,
} from './styles';

export function CardUser() {
  return (
    <Container>
      <Photo />
      <Title>Nome do Produto #1</Title>
      <Description>Descrição do produto #1</Description>
      <SectionFeature>
        <Feature>Feature</Feature>
        <Feature>Feature</Feature>
        <Feature>Feature</Feature>
      </SectionFeature>
      <Button>
        <TextButton>Ver solução</TextButton>
      </Button>
    </Container>
  );
}
