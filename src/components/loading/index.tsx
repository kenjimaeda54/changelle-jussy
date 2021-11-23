import React from 'react';
import { Container, Spinner } from './styles';

type LoadingProps = {
  spinnerHeight?: number;
};

export function Loading({ spinnerHeight }: LoadingProps): JSX.Element {
  return (
    <Container>
      <Spinner customHeight={spinnerHeight} />
    </Container>
  );
}
