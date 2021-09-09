import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const strokeDraw = keyframes`
  from {
    stroke: #8a3ab9;
    stroke-dasharray: 1;
  }
  to {
    stroke: #cd486b;
    transform: rotate(180deg);
    stroke-dasharray: 8;
  }
`;

export const Circle = styled.div`  
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;

  svg {
    fill: none;
    stroke: #8a3ab9;
    stroke-linecap: round;
    stroke-width:3;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    animation: ${strokeDraw} 6s ease-out infinite alternate; 
    /* animation: ${strokeDraw} 6s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate;  */
  }

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;