import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button.attrs({ type: 'button' })`
  height: 40px;
  width: 49%;
  background: transparent;
  outline: none;
  border: 1px solid #aaa;
  cursor: pointer;
  color: #aaa;

  text-transform: uppercase;
  font-size: 16px;
  transition: border, color 0.3s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.main};
    `}

  ${({ smaller }) =>
    smaller &&
    css`
      width: 160px;
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.main};
      height: 30px;
      transition: border, color 0.3s;

      &:hover {
        border: 1px solid
          ${({ theme }) => darken(0.2, theme.palette.primary.main)};
        color: ${({ theme }) => darken(0.2, theme.palette.primary.main)};
      }
    `}

  ${({ color }) =>
    color &&
    css`
      width: 100%;
      background: ${({ theme }) => theme.palette.primary.main};
      color: #fff;
      border: none;
      transition: background 0.3s;

      &:hover {
        background: ${({ theme }) => darken(0.03, theme.palette.primary.main)};
        color: #fff;
      }
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      background: grey;
      cursor: default;

      &:hover {
        background: grey;
        border: none;
      }
    `}
`;
