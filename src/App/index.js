import React, { useState } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';

import * as S from './styles';

function App() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  return (
    <S.Container>
      <S.ContainerSearch>
        <Title>Pesquisar</Title>
        <S.Subtitle>O que deseja buscar?</S.Subtitle>
        <S.Buttons>
          <Button
            title="Filmes"
            onClick={() => setType('movie')}
            selected={type === 'movie'}
          />
          <Button
            title="séries"
            onClick={() => setType('series')}
            selected={type === 'series'}
          />
        </S.Buttons>
        <S.Input
          placeholder="Informe o título da obra"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button title="pesquisar" color />
      </S.ContainerSearch>
      <S.ResultsContainer>
        <Title>resultados</Title>
      </S.ResultsContainer>
    </S.Container>
  );
}

export default App;
