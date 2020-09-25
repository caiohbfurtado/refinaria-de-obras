import React from 'react';

import * as S from './styles';

import Button from '../Button';

function ItemResult({ title, year, onClick }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Year>Ano: {year}</S.Year>
      <Button title="Ver detalhes" smaller onClick={onClick} />
    </S.Container>
  );
}

export default ItemResult;
