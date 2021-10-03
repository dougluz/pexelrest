import styled, { css } from "styled-components";

type Container = {
  loading: boolean
}

export const Container = styled.div<Container>`
  background-color: #fff;
  min-height: 100vh;
  margin: 0 8% 0 8%;
  box-shadow: 0em 0 1em 5px rgba(0, 0, 0, 0.2);
  ${({ loading }) => loading && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media (max-width: 1024px) {
    margin: 0;
  }
`;
