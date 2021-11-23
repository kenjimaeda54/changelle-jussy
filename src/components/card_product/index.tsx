import React, { ButtonHTMLAttributes } from 'react';
import { Container, Button, TextButton } from './styles';

type Card = ButtonHTMLAttributes<HTMLButtonElement> & {
  img: string;
  titleButton: string;
};

export function CardProduct({ img, titleButton }: Card): JSX.Element {
  return (
    <Container>
      <img src={img} alt="image card product" />
      <Button>
        <TextButton>{titleButton}</TextButton>
      </Button>
    </Container>
  );
}
