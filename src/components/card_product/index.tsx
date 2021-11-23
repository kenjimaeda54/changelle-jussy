import React, { ButtonHTMLAttributes, Component } from 'react';
import { Container, Button, TextButton } from './styles';
import CoffeeMachine from '../assets/coffee_machine.svg';

type Card = ButtonHTMLAttributes<HTMLButtonElement> & {
  img: string;
  titleButton: string;
};

export function CardProduct({ img, titleButton }: Card) {
  return (
    <Container>
      <img src={img} />
      <Button>
        <TextButton>{titleButton}</TextButton>
      </Button>
    </Container>
  );
}
