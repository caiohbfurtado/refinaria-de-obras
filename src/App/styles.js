import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
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
  background: blue;
  padding: 20px 20px;
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
