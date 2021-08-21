import React from 'react'
import { API } from '../../types';
import PhotoItem from '../PhotoItem'
import * as S from './styles'

type PhotosProps = {
  data: Array<API.Photo>
}

const grid = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const Photos = ({ data }: PhotosProps) => {
  const isVertical = (width: number, height: number): boolean => height > width;

  return (
    <S.Grid variants={grid} initial="hidden" animate="visible">
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
