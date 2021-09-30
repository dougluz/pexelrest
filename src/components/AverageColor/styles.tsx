import styled from "styled-components";
import AverageColor from "./index";

type AverageColor = {
  color: string
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.p`
  margin-right: 10px;
`;

export const ColorDot = styled.span<AverageColor>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color ? color : 'white'};
  margin-right: 10px;
`;

export const ColorText = styled.p<AverageColor>`
  color: ${({ color }) => color ? color : 'black'};
  text-transform: uppercase;
`;

