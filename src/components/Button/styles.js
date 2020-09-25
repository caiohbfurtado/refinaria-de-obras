import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button.attrs({ type: 'button' })`
  height: 40px;
  width: 160px;
  background: transparent;
  outline: none;
  border: 1px solid #000;
  cursor: pointer;

  text-transform: uppercase;
  font-size: 16px;
  transition: border, color 0.3s;

  &:hover {
    border: 1px solid blue;
    color: blue;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid blue;
      color: blue;
    `}

  ${({ color }) =>
    color &&
    css`
      width: 100%;
      background: blue;
      color: #fff;
      border: none;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, 'blue')};
        color: #fff;
      }
    `}
`;
