import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;
`;

export const ContainerSearch = styled.div`
  height: 100%;
  width: 350px;
  padding: 20px 10px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 20px;
  flex-direction: column;
  border-left: 1px solid #d1d1d1;
`;

export const Subtitle = styled.p`
  margin: 25px 0 15px;
  font-size: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Input = styled.input.attrs(({ placeholder, value, onChange }) => ({
  type: 'text',
  placeholder,
  value,
  onChange,
}))`
  width: 100%;
  height: 40px;
  padding: 10px;
  background: transparent;
  outline: none;
  border: 1px solid #000;
  margin-bottom: 15px;
`;

export const List = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  width: 160px;
  height: 30px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.3s;
  margin: 0 10px;

  svg {
    font-size: 16px;
    margin-top: 2px;
  }

  &:hover {
    background: ${darken(0.03, 'blue')};
  }

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

export const Total = styled.span`
  display: ${({ total }) => (total ? 'flex' : 'none')};
  margin-left: 10px;
`;
