import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg)
  }
`;

export const Box = styled.div`
  width: 700px;
  height: 800px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: relative;
  z-index: 999;

  img {
    width: 350px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    width: 360px;
    font-size: 24px;
    font-weight: bold;
    color: #0009;
    margin-bottom: 10px;
    line-height: 1;
    text-align: center;
  }

  > svg {
    font-size: 35px;
    position: absolute;
    top: 8px;
    right: 8px;

    cursor: pointer;
  }
`;

export const Infos = styled.div`
  margin-top: 15px;
  width: 380px;

  strong {
    color: #0009;
  }

  p {
    width: 100%;
    margin: 5px 0;
    color: #0007;
    text-align: center;
  }
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
