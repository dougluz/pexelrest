import React from 'react'
import { API } from '../../types';
import PhotoItem from '../PhotoItem'
import * as S from './styles'

type PhotosProps = {
  data: Array<API.Photo>
}

const Photos = ({ data }: PhotosProps) => {
  const isVertical = (width: number, height: number): boolean => height > width;

  return (
    <S.Grid>
      {data.map(({
        id,
        src: { large },
        width,
        height
      }) => <PhotoItem key={id} url={large} vertical={isVertical(width, height)} />)}
    </S.Grid>
  )
}

export default Photos
