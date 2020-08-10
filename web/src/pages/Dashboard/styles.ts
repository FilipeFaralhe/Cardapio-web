import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import imgDashboard from '../../assets/imgDashboard.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;


  h1 {
    margin-top: 35px;
  }

  h2 {
    margin-bottom: 20px;
  }

  a {
    background: #ff9000;

    height: 56px;
    width: 100%;
    margin-top: 16px;
    padding: 0 16px;

    border-radius: 10px;
    border: 0;

    color: #312e38;
    text-decoration: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background-color: ${shade(0.2, '#cc7400')};
    }
  }

  a + a {
    background-color: #ffd399;

    &:hover {
      background-color: ${shade(0.2, '#ffbd66')};
    }
  }


`;
export const Background = styled.div`
  flex: 1;
  background: url(${imgDashboard}) no-repeat center;
  background-size: cover;
`;
