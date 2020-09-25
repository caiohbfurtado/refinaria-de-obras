import React from 'react';

import * as S from './styles';

function Button({
  title,
  onClick,
  color,
  selected,
  smaller,
  disabled,
  footer,
}) {
  return (
    <S.Container
      onClick={onClick}
      selected={selected}
      color={color}
      smaller={smaller}
      disabled={disabled}
      footer={footer}
    >
      {title}
    </S.Container>
  );
}

export default Button;
