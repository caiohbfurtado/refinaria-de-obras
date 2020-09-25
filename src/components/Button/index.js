import React from 'react';

import * as S from './styles';

function Button({ title, onClick, color, selected, smaller, disabled }) {
  return (
    <S.Container
      onClick={onClick}
      selected={selected}
      color={color}
      smaller={smaller}
      disabled={disabled}
    >
      {title}
    </S.Container>
  );
}

export default Button;
