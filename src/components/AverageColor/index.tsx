import React from 'react';
import * as S from './styles';

type AverageColorProps = {
  color: string
}

const AverageColor = ({ color }: AverageColorProps) => (
  <S.Container>
    <S.Text>Average Color:</S.Text>
    <S.ColorDot color={color} />
    <S.ColorText color={color}>{color}</S.ColorText>
  </S.Container>
);

export default AverageColor
