import React from 'react';

import * as S from './styles';

function Button({ title, onClick, color, selected }) {
  return (
    <S.Container onClick={onClick} selected={selected} color={color}>
      {title}
    </S.Container>
  );
}

export default Button;
