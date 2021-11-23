import React, { Fragment } from 'react';
import { formatDate, getSex, Results } from '../../utils';
import { Loading } from '../loading';
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
  isLoading: boolean;
  results: Results;
};

export function CardUser({ isLoading, results }: CardUserProps): JSX.Element {
  return (
    <Container>
      {isLoading ? (
        <Loading spinnerHeight={25} />
      ) : (
        <Fragment>
          <Photo src={results.picture.large} alt="image profile" />
          <Title>{results.name.first}</Title>
          <Description>{results.email}</Description>
          <SectionFeature>
            <Feature>Pais:{results.location.country}</Feature>
            <Feature>Sexo:{getSex(results.gender)}</Feature>
            <Feature>Data Nascimento:{formatDate(results.dob.date)}</Feature>
          </SectionFeature>
          <Button>
            <TextButton>Ver solução</TextButton>
          </Button>
        </Fragment>
      )}
    </Container>
  );
}
