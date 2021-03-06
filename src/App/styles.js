import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerSearch = styled.div`
  height: 100%;
  width: 350px;
  padding: 20px 10px;

  @media (max-width: 850px) {
    width: 90%;
    border-bottom: 1px solid #d1d1d1;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 20px;
  flex-direction: column;
  border-left: 1px solid #d1d1d1;

  @media (max-width: 850px) {
    width: 90%;
    border: none;
  }
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
  border: 1px solid #aaa;
  margin-bottom: 15px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
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
  width: 50px;
  height: 30px;
  background: ${({ theme }) => theme.palette.primary.main};
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
    font-size: 32px;
    margin-top: 2px;
  }

  &:hover {
    background: ${({ theme }) => darken(0.03, theme.palette.primary.main)};
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

  @media (max-width: 1010px) {
    margin: 10px 0 0;
  }
`;

export const NoResults = styled.h3`
  margin: 25px 0;
`;

export const Loading = styled.div`
  ${({ loading }) =>
    loading &&
    css`
      margin: 25px 0;
      svg {
        font-size: 40px;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
