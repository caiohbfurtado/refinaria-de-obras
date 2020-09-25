import React from 'react';

import * as S from './styles';

function Button({ title, onClick, color }) {
  return (
    <S.Container onClick={onClick} color={color}>
      {title}
    </S.Container>
  );
}

export default Button;
