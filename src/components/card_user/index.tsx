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

type CardUserProps = {
  name: string;
  email: string;
  country: string;
  genre: string;
  born: string;
  img: string;
};

export function CardUser({
  name,
  img,
  email,
  country,
  genre,
  born,
}: CardUserProps): JSX.Element {
  return (
    <Container>
      <Photo src={img} alt="image profile" />
      <Title>{name}</Title>
      <Description>{email}</Description>
      <SectionFeature>
        <Feature>{country}</Feature>
        <Feature>{genre}</Feature>
        <Feature>{born}</Feature>
      </SectionFeature>
      <Button>
        <TextButton>Ver solução</TextButton>
      </Button>
    </Container>
  );
}
