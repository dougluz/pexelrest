import styled, { keyframes } from "styled-components";

const Dots = keyframes`
  from {
    transform: translate3d(0,0,0)
  } to {
    transform: translate3d(0, 30px, 0);
  }
`;

export const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #E60023;
  margin: 4px;
  animation: ${Dots} .6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span:nth-child(1) {
    animation-delay: .1s;
  }

  span:nth-child(2) {
    animation-delay: .2s;
  }

  span:nth-child(3) {
    animation-delay: .3s;
  }

  span:nth-child(4) {
    animation-delay: .4s;
  }
`;
